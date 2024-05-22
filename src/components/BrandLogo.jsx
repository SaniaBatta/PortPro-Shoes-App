import React from "react";
import BrandLogo1 from "../assets/BrandLogo1.webp";
import BrandLogo2 from "../assets/BrandLogo2.webp";
import BrandLogo3 from "../assets/BrandLogo3.webp";
import BrandLogo4 from "../assets/BrandLogo4.webp";
import BrandLogo5 from "../assets/BrandLogo5.webp";
import BrandLogo6 from "../assets/BrandLogo6.webp";
import BrandLogo7 from "../assets/BrandLogo7.webp";
import BrandLogo8 from "../assets/BrandLogo8.webp";
import BrandLogo9 from "../assets/BrandLogo9.webp";
import BrandLogo10 from "../assets/BrandLogo10.webp";
import BrandLogo11 from "../assets/BrandLogo11.webp";
import BrandLogo12 from "../assets/BrandLogo12.webp";

function BrandLogo() {
  const arr = [
    { img: BrandLogo1 },
    { img: BrandLogo2 },
    { img: BrandLogo3 },
    { img: BrandLogo4 },
    { img: BrandLogo5 },
    { img: BrandLogo6 },
    { img: BrandLogo7 },
    { img: BrandLogo8 },
    { img: BrandLogo9 },
    { img: BrandLogo10 },
    { img: BrandLogo11 },
    { img: BrandLogo12 },
  ];

  return (
    <div id="brands" className="bg-white w-full flex flex-wrap">
      {arr.map((item, index) => (
        <div
          key={index}
          className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-6 sm:p-12 h-[125px] sm:h-[225px] flex items-center justify-center ${
            (index + 1) % 6 !== 0 && "border-r sm:border-r-2"
          } ${index < 6 && "border-b sm:border-b-2"}`}
        >
          <img src={item.img} alt="" className="max-w-full h-auto" />
        </div>
      ))}
    </div>
  );
}

export default BrandLogo;
