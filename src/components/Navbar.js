import useEventListener from "@/hooks/useEventListener";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

function Navbar() {
  const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
  const documentHeight =
    typeof window !== "undefined" || typeof document !== "undefined"
      ? (document.height || document.body.offsetHeight) - window.innerHeight
      : 0;
  const [pageScrolled, setPageScrolled] = useState(scrollY);
  const [sidebaropen, setSidebaropen] = useState(false);

  useEventListener("scroll", (e) => {
    setPageScrolled(window.scrollY);
  });

  return (
    <>
      <div
        className={`w-screen ${
          pageScrolled > 150 ? "h-20" : "h-16"
        } bg-dark-800/70 flex items-center backdrop-blur-md px-10 md:px-20 lg:px-40 z-10 fixed top-0 left-0 shadow-md rounded-lg transition-all duration-300`}
      >
        <div className="flex items-center justify-between w-full">
          <Link
            href="#home"
            scroll={false}
            className="text-dark-50 text-lg lg:text-2xl font-medium hover:text-brand-default transition-all duration-200"
          >
            DevanshDeveloper
          </Link>
          {/* <BiMenuAltLeft className="text-white text-2xl" />
          <div className="absolute top-0 left-0 h-screen flex items-center p-52 w-screen bg-dark-900">
            <ul className="space-y-10">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#about">About Me</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </ul>
          </div> */}
        </div>
        <div
          className="h-1 absolute bottom-0 left-0 bg-brand-default rounded"
          style={{ width: (scrollY / documentHeight) * 100 + "vw" }}
        ></div>
      </div>
    </>
  );
}

export default Navbar;

function NavLink({ href, children }) {
  return (
    <li className="group">
      <Link
        className="text-white text-3xl font-light hover:text-dark-50"
        href={href}
        scroll={false}
      >
        {children}
      </Link>
      <div className="h-1 w-0 hover:w-full bg-brand-default"></div>
    </li>
  );
}
