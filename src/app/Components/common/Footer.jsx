'use client'
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-100 pt-10 pb-6 mt-10">
      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left: School Info */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <img
              src="https://img.icons8.com/color/48/school-building.png"
              alt="school-logo"
              className="w-10 h-10"
            />
            <h2 className="text-xl font-bold">R.M.S High School</h2>
          </div>
          <p className="text-sm text-gray-300">
            CBSE Affiliated | Since 2018 <br />
            Building bright futures with quality education and strong values.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-400 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="#admissions" className="hover:text-yellow-300">Admissions</a></li>
            <li><a href="#academics" className="hover:text-yellow-300">Academics</a></li>
            <li><a href="#gallery" className="hover:text-yellow-300">Gallery</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-400 inline-block">
            Contact Us
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>R.M.S High School, HSR Layout, Bangalore, India</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="text-yellow-400" />
              <span>info@rmshighschool.edu.in</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-300 text-sm border-t border-gray-700 mt-8 pt-4">
        © {new Date().getFullYear()} R.M.S High School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

