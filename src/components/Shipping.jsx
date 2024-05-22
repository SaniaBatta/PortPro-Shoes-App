import React from "react";
import shipping1 from "../assets/shipping1.png";
import shipping2 from "../assets/shipping2.png";
import shipping3 from "../assets/shipping3.png";

function Shipping() {
  const arr = [
    { img: shipping1 },
    { img: shipping2 },
    { img: shipping3 },
    { img: shipping3 },
  ];

  return (
    <div className="flex flex-wrap bg-white">
      {arr.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/4 h-auto sm:h-72 border-r sm:border-r-2 border-zinc-300 px-6 sm:px-12 pt-8 sm:pt-14 pb-6 sm:pb-10 flex flex-col items-center justify-between font-Montserrat"
        >
          <img src={item.img} className="w-8 mb-5" alt="" />
          <h1 className="text-[#0d2e57] text-3xl font-medium uppercase font-BebasNeue">
            Free Shipping
          </h1>
          <p className="text-[#8a8a8a] text-xs sm:text-base tracking-wide leading-5 px-1 text-pretty text-center">
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the
          </p>
          <button className="text-[#3753da] mt-4 font-semibold text-sm">
            Click Here
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shipping;
