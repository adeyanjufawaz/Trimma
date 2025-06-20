"use client";
import React, { useState } from "react";
import { logo } from "@/public/img";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    // Desktop and Ipad
    <>
      <nav className="hidden h-14 lg:flex backdrop-blur-lg bg-white/10 border border-white/30 rounded-2xl shadow-lg text-white fixed w-[90%] mx-auto top-[4%] z-999 ">
        <div className="w-full  mx-auto flex justify-between items-center">
          <Image src={logo} alt="logo" className="h-full w-1/5" />
          <ul className="flex justify-between space-x-6">
            <li className="hover:text-pry-dark text-black cursor-pointer">Home</li>
            <li className="hover:text-pry-dark text-black cursor-pointer">About</li>
            <li className="hover:text-pry-dark text-black cursor-pointer">Services</li>
            <li className="hover:text-pry-dark text-black cursor-pointer">Journalist Directory</li>
            <li className="hover:text-pry-dark text-black cursor-pointer">Contact Us</li>
          </ul>
          <button className={`w-40 py-2 h-full cursor-pointer bg-pry-dark text-white rounded-md`}>
            Let Us Connect
          </button>
        </div>
      </nav>

      {/* Mobile */}
      <nav className="relative lg:hidden">
        <header className="backdrop-blur-md bg-white/10 border flex px-2 items-center justify-between border-white/30 rounded-lg h-14 shadow-lg text-white fixed w-[90%] mx-auto top-0 z-999 ">
          <div>
            <Image src={logo} alt="Logo" className="h-full w-2/5" />
          </div>
          {/* Toggle icons */}
          <div className="text-2xl text-black" onClick={toggleMenu}>
            {<FaBars />}
          </div>
        </header>
        <div
          className={`fixed top-14 p-6 min-h-[55vh] backdrop-blur-xl bg-white/30 w-[90%] z-99 transform transition-transform duration-600 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-[120%]"
          }`}
        >
          <div className="flex flex-col gap-3 justify-between">
            <h2 className="font-normal ">Home</h2>
            <h2 className="font-normal ">About Us</h2>
            <h2 className="font-normal ">Service</h2>
            <h2 className="font-normal ">Journalist Directory</h2>
            <h2 className="font-normal ">Contact Us</h2>
          </div>

          <div className="mt-6 cursor-pointer">
            <Button bgColor="bg-pry-dark" textColor="text-white">
              Let us Connect
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
