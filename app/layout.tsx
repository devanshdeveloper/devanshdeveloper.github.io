import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { Schema, buildPersonSchema } from "@/components/seo";

export const metadata = {
  title: {
    default: "Devansh Khetwani | Full Stack Developer",
    template: "%s | Devansh Khetwani",
  },
  description:
    "Devansh Khetwani is a Full Stack Developer who builds scalable, production-ready web applications using Next.js, React, and Node.js.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "India",
  ],
  authors: [{ name: "Devansh" }],
  creator: "Devansh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devanshdeveloper.github.io",
    title: "Devansh | Full Stack Developer",
    description:
      "Devansh is a Full Stack Developer specializing in building and deploying modern web applications using Next.js, React, and Node.js.",
    siteName: "Devansh Portfolio",
    images: [
      {
        url: "https://devanshdeveloper.github.io/og-image.png", // Ensure you have an OG image
        width: 1200,
        height: 630,
        alt: "Devansh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devansh | Full Stack Developer",
    description:
      "Devansh is a Full Stack Developer specializing in building and deploying modern web applications using Next.js, React, and Node.js.",
    images: ["https://devanshdeveloper.github.io/og-image.png"],
    creator: "@devanshdeveloper", // Update if you have a twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 h-full`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Schema schema={buildPersonSchema()} />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
