import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener to toggle background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const activeLinkClass = "text-yellow-400";
  const linkClass = "block px-4 py-2 text-slate-400 hover:bg-gray-600 hover:text-yellow-400";

  const item = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeLinkClass : ""}`
        }
        onClick={closeMenu}
      >
        Home
      </NavLink>
      <NavLink
        to="/Overview"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeLinkClass : ""}`
        }
        onClick={closeMenu}
      >
        Abouts
      </NavLink>
      <NavLink
        to="/Services"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeLinkClass : ""}`
        }
        onClick={closeMenu}
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeLinkClass : ""}`
        }
        onClick={closeMenu}
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-oswald transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to={"/"}>
            <img className="w-16 rounded-md" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">{item}</div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 fixed top-16 left-0 w-full h-screen z-40">
          <div className="flex flex-col space-y-2 py-4">{item}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
