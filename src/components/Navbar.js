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

  useEventListener("scroll", () => {
    setPageScrolled(window.scrollY);
  });

  function NavLink({ href, children }) {
    return (
      <Link
        onClick={() => setSidebaropen(false)}
        className="text-white text-xl lg:text-lg font-bruno lg:font-poppins font-light whitespace-nowrap hover:text-brand-default transition-all duration-200"
        href={href}
        scroll={false}
      >
        {children}
      </Link>
    );
  }

  return (
    <>
      <div
        className={`w-screen ${
          pageScrolled > 100
            ? "h-20 bg-dark-800/70 shadow-md backdrop-blur-md"
            : "h-16"
        } flex items-center justify-center px-10 md:px-20 lg:px-40 z-10 fixed top-0 left-0 rounded-lg transition-all duration-300`}
      >
        <div className="flex items-center justify-between w-full h-full">
          <Link
            href="/#home"
            scroll={false}
            className="text-dark-50 text-lg lg:text-2xl font-medium hover:text-brand-default transition-all duration-200"
          >
            DevanshDeveloper
          </Link>
          <BiMenuAltLeft
            className="text-white text-2xl lg:hidden"
            onClick={() => setSidebaropen(true)}
          />
          <div
            className={`absolute lg:static top-0 ${
              sidebaropen ? "left-0" : "left-[100%]"
            } h-screen lg:h-auto flex items-center justify-end p-10 w-screen bg-dark-900 lg:bg-transparent z-50 transition-all duration-300`}
          >
            <button
              onClick={() => setSidebaropen(false)}
              className="btn btn-default cursor-pointer text-2xl absolute top-[10%] right-[10%] lg:hidden"
            >
              <RxCross1 />
            </button>
            <ul className="space-y-10 lg:space-y-0 flex flex-col lg:flex-row lg:items-center gap-5">
              <NavLink href="/#home">Home</NavLink>
              <NavLink href="/#about">About Me</NavLink>
              <NavLink href="/#projects">Projects</NavLink>
              <NavLink href="/#skills">Skills</NavLink>
              <NavLink href="/#services">Services</NavLink>
              <NavLink href="/#contact">Get In Touch</NavLink>
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
