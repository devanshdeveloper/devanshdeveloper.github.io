import Link from "next/link";

function Navbar() {
  return (
    <div className="w-screen h-16 bg-dark-800 flex items-center justify-between px-10 md:px-20 lg:px-40 z-10 sticky top-0 left-0 shadow-md rounded-lg">
      <Link
        href="#home"
        className="text-dark-50 text-lg lg:text-2xl font-medium hover:text-brand-default transition-all duration-200"
      >
        DevanshDeveloper
      </Link>
      <ul className="flex gap-10">
        <NavLink href="#projects">About Me</NavLink>
        <NavLink href="#about">About Me</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </ul>
    </div>
  );
}

export default Navbar;

function NavLink({ href, children }) {
  return (
    <li className="">
      <Link
        className="text-white font-light hover:text-dark-50"
        href={href}
        scroll={false}
      >
        {children}
      </Link>
    </li>
  );
}
