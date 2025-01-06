import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/logo.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const linkClass =
    "block px-4 py-2 hover:bg-gray-600 hover:text-yellow-400";

  const activeLinkClass = "text-yellow-400";

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
            <img className="w-16 rounded-md" src={logo} alt="" />
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? activeLinkClass : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Overview"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? activeLinkClass : ""}`
            }
          >
            Abouts
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? activeLinkClass : ""}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${isActive ? activeLinkClass : ""}`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ""}`
            }
            onClick={toggleNavbar}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ""}`
            }
            onClick={toggleNavbar}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ""}`
            }
            onClick={toggleNavbar}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeLinkClass : ""}`
            }
            onClick={toggleNavbar}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
