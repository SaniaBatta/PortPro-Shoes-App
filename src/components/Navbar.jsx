import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import cart from "../assets/cart.png";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="bg-[#212121b3] text-white w-full flex flex-col md:flex-row items-center justify-between h-auto py-4 md:py-0 md:h-16 relative z-20">
      <div className="flex w-full md:w-auto items-center justify-between md:justify-start px-4 md:px-0">
        <span
          className="h-16 flex items-center justify-center cursor-pointer md:hidden"
          onClick={toggleNavVisibility}
        >
          <IoMdMenu size="36px" />
        </span>
        <h1 className="font-extrabold text-2xl md:text-3xl font-Poppins flex-grow md:flex-grow-0 md:w-auto flex items-center justify-center md:justify-start h-16">
          PORTPRO
        </h1>
        <ul className="hidden md:flex items-center justify-around md:ml-8 lg:ml-16 xl:ml-24 h-16 text-sm font-semibold font-Montserrat">
          <li className="px-2 hover:text-gray-400 cursor-pointer"> <a href="#landing">HOME</a></li>
          <li className="px-2 hover:text-gray-400 cursor-pointer"><a href="#products">PRODUCTS</a></li>
          <li className="px-2 hover:text-gray-400 cursor-pointer"><a href="#offers">OFFERS</a></li>
          <li className="px-2 hover:text-gray-400 cursor-pointer"><a href="#sports">SPORTS</a></li>
          <li className="px-2 hover:text-gray-400 cursor-pointer"><a href="#brands">BRANDS</a></li>
          <li className="px-2 hover:text-gray-400 cursor-pointer"><a href="#footer">NEWSLETTER</a></li>
        </ul>
      </div>
      <div className="w-full md:w-auto flex justify-between items-center h-16 md:border-l-2 border-[#ffffff33] px-4 md:px-0 md:ml-auto">
        <div className="flex gap-4 md:gap-6 lg:gap-8 justify-center items-center">
          <FaFacebookF
            size={"19px"}
            className="hover:text-gray-400 cursor-pointer"
          />
          <FaTwitter
            size={"20px"}
            className="hover:text-gray-400 cursor-pointer"
          />
          <FaGooglePlusG
            size={"25px"}
            className="hover:text-gray-400 cursor-pointer"
          />
          <FaInstagram
            size={"21px"}
            className="hover:text-gray-400 cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 ml-4 md:ml-8 lg:ml-12 xl:ml-16">
          <div className="h-16 flex items-center justify-center">
            <img src={cart} alt="cart" className="w-5" />
          </div>
          <div className="h-16 flex items-center justify-center">
            <span>
              <IoSearchSharp
                size={"20px"}
                className="hover:text-gray-400 cursor-pointer"
              />
            </span>
          </div>
        </div>
      </div>
      {isNavVisible && (
        <ul className="flex flex-col md:hidden items-center gap-1 justify-around w-full text-sm font-semibold font-Montserrat py-4 bg-[#212121] z-20 absolute top-full left-0">
          <li className="py-1 hover:text-gray-400 cursor-pointer">HOME</li>
          <li className="py-1 hover:text-gray-400 cursor-pointer">PRODUCTS</li>
          <li className="py-1 hover:text-gray-400 cursor-pointer">OFFERS</li>
          <li className="py-1 hover:text-gray-400 cursor-pointer">SPORTS</li>
          <li className="py-1 hover:text-gray-400 cursor-pointer">BRANDS</li>
          <li className="py-1 hover:text-gray-400 cursor-pointer">NEWSLETTER</li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
