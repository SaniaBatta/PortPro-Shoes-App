import React from "react";
import ProductBanner from "../assets/ProductBanner.webp";

function ProductBanner2() {
  return (
    <div className="relative w-full sm:w-1/2 md:w-2/3 lg:w-1/2 bg-zinc-300 flex flex-col items-start justify-center text-white p-6 md:p-12 rounded-lg shadow-lg overflow-hidden">
      <img src={ProductBanner} className="h-full w-full absolute inset-0 object-cover z-0" alt="" />
      <div className="relative z-10">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Poppins italic">
          RUN,
          <br /> EAT, SLEEP
          <br /> AND REPEAT
        </h1>
        <button className="mt-4 sm:mt-6 bg-[#65cbff] uppercase text-black text-xs sm:text-sm px-4 py-2 rounded-full font-semibold font-Montserrat">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default ProductBanner2;
