'use client'
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex justify-center items-center w-full h-[65vh] md:h-[65vh] lg:h-[65vh] overflow-hidden">
      {/* Background Image */}
      <img
      src="img2.png"
        alt="R.M.S High School campus"
        className="w-full h-full object-cover"
      />

      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 py-20 sm:px-6 md:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 leading-tight">
          Welcome to{" "}
          <span className="text-yellow-300">R.M.S High School</span>
        </h1>

        <h2 className="text-base sm:text-lg md:text-2xl font-medium mb-2">
          Best School in Jamshedpur
        </h2>

        <p className="text-sm sm:text-base md:text-lg italic text-gray-200 mb-2">
          “Nurturing Excellence in Education!”
        </p>

        <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6">
          CBSE Affiliated | Reg. No. 12345
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#register"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full transition-all shadow-md"
          >
            Register
          </a>
          <a
            href="#admission-form"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full transition-all shadow-md"
          >
            Get Admission Form
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


