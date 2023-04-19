import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <meta
          name="description"
          content="Devansh Khetwani Portfolio"
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
