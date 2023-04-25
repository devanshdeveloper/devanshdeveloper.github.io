import useEventListener from "@/hooks/useEventListener";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

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

  function NavLink({ href, children }) {
    return (
      <li className="group">
        <Link
          onClick={() => setSidebaropen(false)}
          className="text-white text-xl lg:text-3xl font-light hover:text-dark-50"
          href={href}
          scroll={false}
        >
          {children}
        </Link>
        <div className="h-1 w-0 hover:w-full bg-brand-default"></div>
      </li>
    );
  }

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
          <BiMenuAltLeft
            className="text-white text-2xl"
            onClick={() => setSidebaropen(true)}
          />
          <div
            className={`absolute top-0 ${
              sidebaropen ? "left-0" : "left-[100%]"
            } h-screen flex items-center p-10 sm:p-20 md:p-30 lg:p-52 w-screen bg-dark-900 z-50 transition-all duration-300`}
          >
            <button
              onClick={() => setSidebaropen(false)}
              className="btn btn-default text-2xl absolute top-[10%] right-[10%]"
            >
              <RxCross1 />
            </button>
            <ul className="space-y-10">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#about">About Me</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#contact">Get In Touch</NavLink>
            </ul>
          </div>
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
