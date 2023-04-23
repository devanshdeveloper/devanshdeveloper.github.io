import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import useEventListener from "@/hooks/useEventListener";
import "@/styles/globals.css";
import Head from "next/head";
// import { useRef } from "react";

export default function App({ Component, pageProps }) {
  // const cursorRef = useRef();

  // function moveCursor(e) {
  //   cursorRef.current.style.left = e.pageX  + "px";
  //   cursorRef.current.style.top = e.pageY  + "px";
  // }

  // useEventListener(
  //   "mousemove",
  //   moveCursor,
  //   typeof document !== "undefined" ? document : null
  // );
  // useEventListener(
  //   "mouseleave",
  //   () => cursorRef.current.style.display = "none",
  //   typeof document !== "undefined" ? document : null
  // );
  // useEventListener(
  //   "mouseenter",
  //   () => cursorRef.current.style.display = "block",
  //   typeof document !== "undefined" ? document : null
  // );

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      {/* <div
        ref={cursorRef}
        className="w-10 h-10 bg-transparent absolute z-50 rounded-full border-4 backdrop-blur-sm  "
      ></div> */}
    </>
  );
}
