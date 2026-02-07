# Next.js SEO Implementation Prompt

> **For AI Agents**: Use this prompt to implement production-grade SEO in any Next.js (App Router) website.

---

## Objective

Implement comprehensive SEO optimization for a Next.js 13+ website using the App Router, including:

1. **Schema.org JSON-LD structured data** for rich snippets
2. **Dynamic metadata generation** for all pages
3. **Sitemap generation** for search engine crawlers
4. **Google Analytics & Tag Manager integration**
5. **robots.txt configuration**

---

## 1. Create SEO Schema Components

### File: `/components/seo/Schema.jsx`

```jsx
/**
 * Schema Component for Next.js (App Router)
 * Production-grade JSON-LD structured data injection
 *
 * Features:
 * - Supports single or multiple schemas
 * - SSR-friendly (SEO bots see it immediately)
 * - Auto-injects @context
 */

export default function Schema({ schema, id }) {
  if (!schema) return null;

  // Handle array of schemas or single schema
  const json = Array.isArray(schema)
    ? schema
        .filter(Boolean) // Remove null/undefined schemas
        .map((s) => ({
          "@context": "https://schema.org",
          ...s,
        }))
    : {
        "@context": "https://schema.org",
        ...schema,
      };

  // Don't render if empty array
  if (Array.isArray(json) && json.length === 0) return null;

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json, null, 0),
      }}
    />
  );
}
```

---

### File: `/components/seo/schema.builders.js`

> **IMPORTANT**: Replace `YOUR_ORG` values with the actual business details.

```javascript
/**
 * Schema.org Builder Functions
 * Production-grade, composable schema builders
 */

// Organization details (CUSTOMIZE THIS)
export const YOUR_ORG = {
  name: "Your Company Name",
  url: "https://www.yourwebsite.com",
  logo: "https://www.yourwebsite.com/logo.png",
  description: "Your company description for SEO",
  address: {
    streetAddress: "Your Street Address",
    addressLocality: "City",
    addressRegion: "State/Region",
    postalCode: "12345",
    addressCountry: "US",
  },
  contactPoint: {
    telephone: "+1-234-567-8900",
    contactType: "sales",
    email: "contact@yourwebsite.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/yourcompany/",
    "https://www.facebook.com/yourcompany/",
    "https://www.instagram.com/yourcompany/",
  ],
};

/**
 * Build Organization Schema
 */
export const buildOrganizationSchema = ({
  name = YOUR_ORG.name,
  url = YOUR_ORG.url,
  logo,
  description,
  sameAs = [],
  address,
  contactPoint,
} = {}) => ({
  "@type": "Organization",
  name,
  url,
  ...(logo && { logo }),
  ...(description && { description }),
  ...(sameAs.length > 0 && { sameAs }),
  ...(address && {
    address: {
      "@type": "PostalAddress",
      ...address,
    },
  }),
  ...(contactPoint && {
    contactPoint: {
      "@type": "ContactPoint",
      ...contactPoint,
    },
  }),
});

/**
 * Build WebSite Schema with SearchAction
 */
export const buildWebSiteSchema = ({
  name = YOUR_ORG.name,
  url = YOUR_ORG.url,
  searchUrl,
} = {}) => ({
  "@type": "WebSite",
  name,
  url,
  ...(searchUrl && {
    potentialAction: {
      "@type": "SearchAction",
      target: `${searchUrl}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }),
});

/**
 * Build Article/BlogPosting Schema
 */
export const buildArticleSchema = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName = YOUR_ORG.name,
  url,
  type = "Article", // or "BlogPosting"
}) => ({
  "@type": type,
  headline,
  ...(description && { description }),
  ...(image && { image }),
  ...(datePublished && { datePublished }),
  ...(dateModified && { dateModified }),
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url,
  },
  author: {
    "@type": "Organization",
    name: authorName,
    url: YOUR_ORG.url,
  },
  publisher: {
    "@type": "Organization",
    name: YOUR_ORG.name,
    url: YOUR_ORG.url,
    ...(YOUR_ORG.logo && {
      logo: {
        "@type": "ImageObject",
        url: YOUR_ORG.logo,
      },
    }),
  },
});

/**
 * Build Product Schema
 * Rich Results Test requires: offers, review, or aggregateRating
 */
export const buildProductSchema = ({
  name,
  description,
  image,
  sku,
  brand = YOUR_ORG.name,
  category,
  url,
  offers,
  aggregateRating,
  review,
}) => {
  const images = Array.isArray(image) ? image : image ? [image] : [];

  // Default offers (required by Rich Results Test)
  const defaultOffers = {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    price: "0",
    priceValidUntil: new Date(
      new Date().setFullYear(new Date().getFullYear() + 1),
    )
      .toISOString()
      .split("T")[0],
    seller: {
      "@type": "Organization",
      name: YOUR_ORG.name,
      url: YOUR_ORG.url,
    },
  };

  return {
    "@type": "Product",
    name,
    ...(description && { description }),
    ...(images.length > 0 && { image: images }),
    ...(sku && { sku }),
    brand: { "@type": "Brand", name: brand },
    ...(category && { category }),
    ...(url && { url }),
    manufacturer: {
      "@type": "Organization",
      name: YOUR_ORG.name,
      url: YOUR_ORG.url,
    },
    offers: offers || defaultOffers,
    ...(aggregateRating && {
      aggregateRating: { "@type": "AggregateRating", ...aggregateRating },
    }),
    ...(review && {
      review: Array.isArray(review)
        ? review.map((r) => ({ "@type": "Review", ...r }))
        : { "@type": "Review", ...review },
    }),
  };
};

/**
 * Build Breadcrumb Schema
 */
export const buildBreadcrumbSchema = (items) => {
  if (!items || items.length === 0) return null;

  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${YOUR_ORG.url}${item.url}`,
    })),
  };
};

/**
 * Build FAQ Schema
 */
export const buildFAQSchema = (faqs) => {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

/**
 * Build ItemList Schema (for collection/category pages)
 */
export const buildItemListSchema = ({ name, description, items, url }) => {
  if (!items || items.length === 0) return null;

  return {
    "@type": "ItemList",
    name,
    ...(description && { description }),
    ...(url && { url }),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { url: item.url }),
    })),
  };
};

/**
 * Build LocalBusiness Schema
 */
export const buildLocalBusinessSchema = () => ({
  "@type": "LocalBusiness",
  name: YOUR_ORG.name,
  url: YOUR_ORG.url,
  logo: YOUR_ORG.logo,
  description: YOUR_ORG.description,
  address: {
    "@type": "PostalAddress",
    ...YOUR_ORG.address,
  },
  telephone: YOUR_ORG.contactPoint.telephone,
  email: YOUR_ORG.contactPoint.email,
  sameAs: YOUR_ORG.sameAs,
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-18:00",
});
```

---

### File: `/components/seo/index.js`

```javascript
export { default as Schema } from "./Schema";
export * from "./schema.builders";
```

---

## 2. Root Layout Configuration

### File: [/app/layout.js](file:///c:/code/nextwebworks/FantomChemicals/fentom-chemicals/app/layout.js)

```jsx
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: "Your Site Title - Main Keyword",
  description: "Your meta description (150-160 chars)",
  keywords: "keyword1, keyword2, keyword3",
  authors: [{ name: "Your Company" }],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://www.yourwebsite.com/",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  openGraph: {
    type: "website",
    url: "https://www.yourwebsite.com/",
    title: "Your OG Title",
    description: "Your OG description",
    siteName: "Your Site Name",
    locale: "en_US",
    images: [
      {
        url: "https://www.yourwebsite.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Your Site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Your Twitter Title",
    description: "Your Twitter description",
    images: ["https://www.yourwebsite.com/og-image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-XXXXXXXX" />
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
```

> **Install required package**: `npm install @next/third-parties`

---

## 3. Page-Level Dynamic Metadata

### Example: Product Detail Page

```jsx
import {
  Schema,
  buildProductSchema,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  YOUR_ORG,
} from "@/components/seo";

// Dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await fetchProduct(slug);

  if (product) {
    return {
      title: `${product.name} | Your Site`,
      description: truncateText(product.description, 160),
      openGraph: {
        title: product.name,
        description: truncateText(product.description, 160),
        images: product.image ? [{ url: product.image }] : [],
      },
      alternates: {
        canonical: `https://www.yourwebsite.com/products/${slug}`,
      },
    };
  }

  return {
    title: "Product | Your Site",
    description: "Explore our products",
  };
}

// Page component
export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await fetchProduct(slug);

  const schemas = [
    buildOrganizationSchema(YOUR_ORG),
    buildBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
      ...(product ? [{ name: product.name, url: `/products/${slug}` }] : []),
    ]),
    ...(product
      ? [
          buildProductSchema({
            name: product.name,
            description: product.description,
            image: product.images,
            sku: product.sku,
            category: product.category,
            url: `${YOUR_ORG.url}/products/${slug}`,
          }),
        ]
      : []),
  ].filter(Boolean);

  return (
    <>
      <Schema schema={schemas} id="product-schema" />
      <ProductContent product={product} />
    </>
  );
}
```

### Example: Blog Post Page

```jsx
import {
  Schema,
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  YOUR_ORG,
} from "@/components/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  if (blog) {
    return {
      title: blog.title,
      description: stripHtmlAndTruncate(blog.content, 160),
      openGraph: {
        title: blog.title,
        description: stripHtmlAndTruncate(blog.content, 160),
        images: blog.image ? [{ url: blog.image }] : [],
        type: "article",
        publishedTime: blog.createdAt,
        modifiedTime: blog.updatedAt,
      },
    };
  }

  return { title: "Blog | Your Site" };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  const schemas = [
    buildOrganizationSchema(YOUR_ORG),
    buildBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      ...(blog ? [{ name: blog.title, url: `/blog/${slug}` }] : []),
    ]),
    ...(blog
      ? [
          buildArticleSchema({
            headline: blog.title,
            description: stripHtmlAndTruncate(blog.content, 300),
            image: blog.image,
            datePublished: blog.createdAt,
            dateModified: blog.updatedAt,
            url: `${YOUR_ORG.url}/blog/${slug}`,
            type: "BlogPosting",
          }),
        ]
      : []),
  ].filter(Boolean);

  return (
    <>
      <Schema schema={schemas} id="blog-schema" />
      <BlogContent blog={blog} />
    </>
  );
}
```

---

## 4. Dynamic Sitemap

### File: [/app/sitemap.js](file:///c:/code/nextwebworks/FantomChemicals/fentom-chemicals/app/sitemap.js)

```javascript
const BASE_URL = "https://www.yourwebsite.com";
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default async function sitemap() {
  // Static routes
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Dynamic routes
  let productRoutes = [];
  let blogRoutes = [];

  try {
    const [products, blogs] = await Promise.all([
      fetch(`${API_BASE}/products`, { next: { revalidate: 3600 } }).then((r) =>
        r.json(),
      ),
      fetch(`${API_BASE}/blogs`, { next: { revalidate: 3600 } }).then((r) =>
        r.json(),
      ),
    ]);

    productRoutes = products
      .filter((p) => p.slug)
      .map((p) => ({
        url: `${BASE_URL}/products/${p.slug}`,
        lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));

    blogRoutes = blogs
      .filter((b) => b.slug)
      .map((b) => ({
        url: `${BASE_URL}/blog/${b.slug}`,
        lastModified: b.updatedAt ? new Date(b.updatedAt) : new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));
  } catch (error) {
    console.error("Sitemap generation error:", error);
  }

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
```

---

## 5. robots.txt

### File: [/public/robots.txt](file:///c:/code/nextwebworks/FantomChemicals/fentom-chemicals/public/robots.txt)

```
User-agent: *
Allow: /

Host: https://www.yourwebsite.com

Sitemap: https://www.yourwebsite.com/sitemap.xml
```

---

## 6. Helper Functions

```javascript
// Truncate text for meta descriptions
function truncateText(text, maxLength = 160) {
  if (!text) return "";
  const cleaned = text.replace(/\s+/g, " ").trim();
  return cleaned.length > maxLength
    ? cleaned.substring(0, maxLength) + "..."
    : cleaned;
}

// Strip HTML and truncate (for blog content)
function stripHtmlAndTruncate(html, maxLength = 160) {
  if (!html) return "";
  const text = html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}
```

---

## Implementation Checklist

- [ ] Create `/components/seo/` directory with all 3 files
- [ ] Update `YOUR_ORG` constant with actual business details
- [ ] Configure [layout.js](file:///c:/code/nextwebworks/FantomChemicals/fentom-chemicals/app/layout.js) with global metadata
- [ ] Add Google Analytics & Tag Manager IDs
- [ ] Set Google Search Console verification code
- [ ] Implement [generateMetadata](file:///c:/code/nextwebworks/FantomChemicals/fentom-chemicals/app/blog/%5Bslug%5D/page.jsx#12-39) on all dynamic pages
- [ ] Add `<Schema>` component to all pages
- [ ] Create [sitemap.js](file:///c:/code/nextwebworks/FantomChemicals/fentom-chemicals/app/sitemap.js) with all routes
- [ ] Create [robots.txt](file:///c:/code/nextwebworks/FantomChemicals/fentom-chemicals/public/robots.txt) in `/public`
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console

---

## Schema Types Quick Reference

| Page Type | Schemas to Use                                 |
| --------- | ---------------------------------------------- |
| Home      | Organization, WebSite, LocalBusiness, ItemList |
| Product   | Organization, Breadcrumb, Product              |
| Blog Post | Organization, Breadcrumb, Article/BlogPosting  |
| Category  | Organization, Breadcrumb, ItemList             |
| FAQ       | Organization, FAQPage                          |
| Contact   | Organization, LocalBusiness                    |
