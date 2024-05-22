import React from "react";
import SplOfferImage from "../assets/SplOfferImage.png";

function SplOffers() {
  const arr = [
    { number: "09", clock: "HOURS" },
    { number: "56", clock: "MINUTES" },
    { number: "11", clock: "SECONDS" },
  ];

  return (
    <div id="offers"className="bg-[#f2f0f0] flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-auto flex flex-col items-center justify-between px-6 sm:px-28 pt-8 sm:pt-[84px] pb-8 sm:pb-16 font-Montserrat">
        <h2 className="text-[#616161] font-semibold text-lg font-Poppins">
          OFFER OF THE MONTH
        </h2>
        <h1 className="text-[#0d2e57] font-bold text-[32px] sm:text-[43px] font-BebasNeue">
          PHANTOM VISION ELITE DYNAMIC
        </h1>
        <p className="text-[#8a8a8a] text-center w-full sm:w-[500px] font-light text-balance">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply
          dummy text of the printing
        </p>
        <div className="flex items-center gap-10 my-4">
          <h1 className="text-[#3954d9] font-bold text-4xl">$500</h1>
          <h2 className="text-[#121212] line-through text-2xl font-semibold">
            $1000
          </h2>
        </div>
        <div className="h-28 flex justify-center gap-10 mt-4">
          {arr.map((item, index) => (
            <div
              key={index}
              className="h-full w-24 bg-white rounded-2xl font-semibold flex flex-col items-center justify-center pb-2"
            >
              <h1 className="text-4xl relative top-2 font-semibold">
                {item.number}
              </h1>
              <p className="text-sm">...</p>
              <h2 className="text-sm font-semibold">{item.clock}</h2>
            </div>
          ))}
        </div>
        <button className="mt-4 px-4 py-2 text-white text-sm font-medium rounded-full bg-[#3954d9]">
          SHOP NOW
        </button>
      </div>
      <div className="w-full md:w-1/2 bg-red-100 h-[400px] md:h-full">
        <img
          src={SplOfferImage}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

export default SplOffers;
