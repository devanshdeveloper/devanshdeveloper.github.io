/**
 * Schema.org Builder Functions
 * Production-grade, composable schema builders
 */

// Organization details
export const YOUR_ORG = {
  name: "Devansh",
  url: "https://devanshdeveloper.github.io", // Update with actual URL if different
  logo: "https://devanshdeveloper.github.io/logo.png", // Verify logo URL or use a placeholder
  description:
    "Full Stack Developer building and shipping production-ready web applications.",
  address: {
    streetAddress: "Indore",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452001",
    addressCountry: "IN",
  },
  contactPoint: {
    telephone: "", // Add if available
    contactType: "sales",
    email: "devanshkhetwani@gmail.com",
  },
  sameAs: [
    "https://github.com/devanshdeveloper",
    "https://linkedin.com/in/devansh-khetwani-44873b269", // Verify LinkedIn URL
    // Add other social links
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
}: {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  address?: any;
  contactPoint?: any;
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
}: {
  name?: string;
  url?: string;
  searchUrl?: string;
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
 * Build Person Schema (More appropriate for a portfolio)
 */
export const buildPersonSchema = ({
  name = YOUR_ORG.name,
  url = YOUR_ORG.url,
  image,
  jobTitle = "Full Stack Developer",
  worksFor,
  sameAs = YOUR_ORG.sameAs,
}: {
  name?: string;
  url?: string;
  image?: string;
  jobTitle?: string;
  worksFor?: string;
  sameAs?: string[];
} = {}) => ({
  "@type": "Person",
  name,
  url,
  ...(image && { image }),
  jobTitle,
  ...(worksFor && { worksFor: { "@type": "Organization", name: worksFor } }),
  ...(sameAs.length > 0 && { sameAs }),
});

/**
 * Build Breadcrumb Schema
 */
export const buildBreadcrumbSchema = (
  items: { name: string; url: string }[],
) => {
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
 * Build ItemList Schema (for projects/skills)
 */
export const buildItemListSchema = ({
  name,
  description,
  items,
  url,
}: {
  name: string;
  description?: string;
  items: { name: string; url?: string }[];
  url?: string;
}) => {
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
