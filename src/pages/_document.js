import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <meta name="title" content="DevanshDeveloper" />
        <meta
          name="description"
          content="Looking for a portfolio website of a web developer? Check out Devanshdeveloper's portfolio website built using Next JS! With a sleek and modern design, this website showcases Devanshdeveloper's web development skills and experience. Explore his projects, skills, and achievements in web development. Whether you're a potential employer or just interested in Devanshdeveloper's work, this website has everything you need to know about his web development expertise."
        />
        <meta
          name="keywords"
          content="web develoeper, web development, nextjs , javascript"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#1fe" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
