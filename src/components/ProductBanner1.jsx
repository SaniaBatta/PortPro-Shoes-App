import React from "react";

function ProductBanner1() {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#232323] text-white p-6 flex flex-col items-start justify-center gap-3 rounded-lg shadow-lg">
      <h1 className="uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-BebasNeue">
        Men's Running Shoes
      </h1>
      <p className="tracking-widest text-sm sm:text-base font-medium font-Montserrat">
        SIGN UP NOW AND GET 50% OFF
      </p>
      <button className="mt-4 sm:mt-6 bg-[#3954d9] uppercase text-xs sm:text-sm px-4 py-2 rounded-full font-medium font-Montserrat">
        Click Here
      </button>
    </div>
  );
}

export default ProductBanner1;
