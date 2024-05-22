import React from "react";
import featureImg1 from "../assets/featureImg1.webp";
import featureImg2 from "../assets/featureImg2.webp";
import featureImg3 from "../assets/featureImg3.webp";
import featureImg4 from "../assets/featureImg4.webp";
import featureImg5 from "../assets/featureImg5.webp";
import featureImg6 from "../assets/featureImg6.webp";
import featureImg7 from "../assets/featureImg7.webp";
import featureImg8 from "../assets/featureImg8.webp";

function FeaturedImages() {
  const arr = [
    { img: featureImg1 },
    { img: featureImg2 },
    { img: featureImg3 },
    { img: featureImg4 },
    { img: featureImg5 },
    { img: featureImg6 },
    { img: featureImg7 },
    { img: featureImg8 },
  ];
  return (
    <div  id="sports" className="flex  flex-wrap">
      {arr.map((item) => (
        <img src={item.img} alt="" className="w-1/4  " />
      ))}
    </div>
  );
}

export default FeaturedImages;
