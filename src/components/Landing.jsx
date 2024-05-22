import React from "react";
import Navbar from "./Navbar";
import HeroImg from "../assets/HeroImg.webp";

function Landing() {
  return (
    <div id="landing" className="h-screen relative flex items-center justify-center">
      <span className="absolute z-10 w-full top-0">
        <Navbar />
      </span>
      <img
        src={HeroImg}
        className="absolute h-full w-full object-cover"
        alt=""
      />
      <div className="relative text-white flex flex-col items-center gap-5 px-4 md:px-0 md:right-[18%] sm:px-0 sm:right-[18%]">
        <h1 className="text-[80px] md:text-[145px] sm:text-[145px]  font-Poppins leading-[110px] sm:pt-40 font-bold text-center">
          NIKE
          <br />
          SHOES
        </h1>
        <p className="text-base sm:text-xl text-center font-semibold font-Montserrat tracking-[.3em]">
          SIGN UP NOW AND GET 50% OFF
        </p>
        <button className="bg-[#3954d9] px-5 py-2 rounded-full mt-5 font-Montserrat font-medium">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Landing;
