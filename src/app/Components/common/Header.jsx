'use client'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Admissions", href: "#admissions" },
    { name: "Academics", href: "#academics" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="shadow-md w-full sticky top-0 left-0 z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-10">
        {/* Logo / School Name */}
        <a href="#" className="flex items-center space-x-2">
          <img
            src="slogo.png"
            alt="school-logo"
            className="w-10 h-10"
          />
          <div>
            <h1 className="text-lg md:text-xl font-bold text-blue-700">
              R.M.S High School
            </h1>
            <p className="text-xs text-gray-500 -mt-1">
              CBSE Affiliated | Since 2018
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-blue-700 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block hover:text-blue-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

