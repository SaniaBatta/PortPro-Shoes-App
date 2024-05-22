import React from "react";
import FooterBG from "../assets/FooterBG.png";
import {
  FaGooglePlusG,
  FaPinterestP,
  FaVimeoV,
  FaFacebookSquare,
  FaTwitter,
  FaRss,
  FaCcMastercard,
  FaCcDiscover,
  FaCcVisa,
  FaCcStripe,
  FaCcDinersClub,
} from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

function Footer() {
  return (
    <div id="footer" className="relative z-50 bg-zinc-900 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-end font-Poppins py-10 md:py-20">
      <img
        src={FooterBG}
        className="h-full w-full object-cover absolute inset-0 z-0"
        alt=""
      />

      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between px-5 z-10">
        <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-24 mb-8 md:mb-0">
          <div className="w-40 md:w-60 text-white">
            <h1 className="text-lg md:text-xl font-medium uppercase text-[#3753da] mb-4 md:mb-8">
              Shops
            </h1>
            <div className="flex flex-col gap-1 font-light">
              {["New In", "Women", "Schuhe Shoes", "Bags & Accessories", "Men", "Top Brands", "Sale & Special Offers", "Lookbook"].map((item) => (
                <a href="#" className="w-fit" key={item}>
                  <p>{item}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="w-40 md:w-60 text-white">
            <h1 className="text-lg md:text-xl uppercase text-[#3753da] font-medium mb-4 md:mb-8">
              Information
            </h1>
            <div className="flex flex-col gap-1 font-light">
              {["About Us", "Customer Service", "New Collection", "Best Sellers", "Manufacturers", "Privacy Policy", "Terms & Condition", "Blog"].map((item) => (
                <a href="#" className="w-fit" key={item}>
                  <p>{item}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="w-40 md:w-60 text-white">
            <h1 className="text-lg md:text-xl uppercase text-[#3753da] font-medium mb-4 md:mb-8">
              Customer Service
            </h1>
            <div className="flex flex-col gap-1 font-light">
              {["Search Terms", "Advanced Search", "Orders and Returns", "Contact Us", "RSS", "Help & FAQs", "Consultant", "Store Locations"].map((item) => (
                <a href="#" className="w-fit" key={item}>
                  <p>{item}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-lg md:text-xl font-medium uppercase text-[#3753da]">
              Stay Connected
            </h1>
            <div className="flex gap-4">
              {[FaGooglePlusG, FaPinterestP, FaVimeoV, FaFacebookSquare, FaTwitter, FaRss].map((Icon, index) => (
                <Icon key={index} size="30px" className="bg-white rounded-full p-2" />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-lg md:text-xl font-medium uppercase text-[#3753da]">
              Newsletter Sign Up
            </h1>
            <input
              type="email"
              className="bg-[#2f2f2f] text-zinc-200 tracking-wide rounded-full w-60 md:w-72 h-8 text-sm py-2 px-3 border-none outline-none"
            />
            <button className="px-6 py-2 text-white text-xs font-medium rounded-full bg-[#3954d9] mt-1 font-Montserrat">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 md:mt-20 z-10 flex flex-col md:flex-row items-center justify-between px-5 border-t-4 border-[#ffffff33] pt-5">
        <div className="text-[#ffffff54] text-sm flex flex-col items-start md:items-center gap-1 text-center md:text-left">
          <p>© 2022 PSDfreebies.com | All Rights Reserved.</p>
          <p>Free PSD Themes & Templates by PSDFreebies.com.</p>
        </div>
        <div className="text-[#ffffff99] flex items-center gap-5 mt-5 md:mt-0">
          {[FaCcMastercard, FaCcDiscover, SiAmericanexpress, FaCcVisa, FaCcStripe, FaCcDinersClub].map((Icon, index) => (
            <Icon key={index} size="35px" className={index === 2 ? "rounded-sm" : ""} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
