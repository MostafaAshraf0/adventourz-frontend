import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../assets/data/data";

interface NavbarProps {
  isHomePage?: boolean;
}

interface NavLink {
  name: string;
  link: string;
}

// Assuming navLinks is an array of objects with the shape defined in NavLink interface
// If navLinks is defined elsewhere and not as expected, you'll need to adjust accordingly

const Navbar: React.FC<NavbarProps> = ({ isHomePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Step 3: Type the event parameter
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false); // Close the menu if the click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string): boolean => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`z-50 w-full px-5 py-4 sm:px-10 lg:px-20 ${isHomePage ? "absolute top-0" : "sticky bg-neutral shadow-lg"} flex items-center justify-between transition-all duration-300 ease-in-out`}
    >
      <Link
        to="/"
        className={`cursor-pointer text-xl font-bold transition-colors duration-300 ease-in-out sm:text-3xl lg:text-4xl ${isHomePage ? "text-white" : "text-primary"}`}
      >
        ADVENTOURZ
      </Link>

      <div className="hidden gap-4 lg:flex">
        {navLinks.map((link: NavLink, index: number) => (
          <Link
            key={index}
            to={link.link}
            className={`cursor-pointer text-lg transition-colors duration-300 ease-in-out hover:text-primary lg:text-2xl lg:hover:bg-transparent ${
              isHomePage ? "text-white" : "text-black"
            } ${isActive(link.link) ? "text-primary" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="" />

      <div className="lg:hidden">
        <button
          ref={toggleButtonRef}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-8 w-8 
            ${isHomePage ? "text-white" : "text-primary"}
            lg:text-primary`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        ref={menuRef}
        className={`fixed right-0 top-16 mt-2 flex w-48 flex-col items-center gap-4 p-5 text-center shadow-md transition-all duration-300 ease-linear ${
          isMenuOpen ? "block" : "hidden"
        } ${isHomePage ? "rounded-lg bg-white" : "bg-neutral"} lg:static lg:m-0 lg:w-auto lg:flex-row lg:bg-transparent lg:p-0 lg:shadow-none`}
      >
        {navLinks.map((link: NavLink, index: number) => (
          <Link
            key={index}
            to={link.link}
            onClick={() => setIsMenuOpen(false)}
            className={`block w-full cursor-pointer text-lg text-black transition-colors duration-300 ease-in-out hover:text-primary lg:text-2xl lg:hover:bg-transparent ${isActive(link.link) ? "text-primary" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
