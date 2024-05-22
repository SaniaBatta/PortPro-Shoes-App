import React from "react";
import ProductCard from "./ProductCard.jsx";
import Product1 from "../assets/Product1.webp";
import Product2 from "../assets/Product2.webp";
import Product3 from "../assets/Product3.webp";
import Product4 from "../assets/Product4.webp";
import Product5 from "../assets/Product5.webp";
import Product6 from "../assets/Product6.webp";
import Product7 from "../assets/Product7.webp";
import Product8 from "../assets/Product8.webp";
import Product9 from "../assets/Product9.webp";
import ProductBanner1 from "./ProductBanner1.jsx";
import ProductBanner2 from "./ProductBanner2.jsx";

function FeatureProduct() {
  const arr = [
    { img: Product1, productName: "Stefan Janoski Max" },
    { img: Product2, productName: "Vandal High Supreme" },
    { img: Product3, productName: "New Zoom" },
    { img: Product4, productName: "Fit Shoes" },
    {},
    { img: Product5, productName: "Free Shipping" },
    {},
    { img: Product6, productName: "Apple Watch" },
    { img: Product7, productName: "Sports Shoes" },
    { img: Product8, productName: "Men Shoes" },
    { img: Product9, productName: "Girl Shoe" },
  ];

  return (
    <div id="products" className="flex flex-wrap justify-center gap-4 p-4">
      {arr.map((item, index) => {
        if (index === 6) {
          return <ProductBanner2 key={index} />;
        } else if (index === 4) {
          return <ProductBanner1 key={index} />;
        }
        if (item.img && item.productName) {
          return (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <ProductCard img={item.img} productName={item.productName} />
            </div>
          );
        }
        return null;
      })}
      <button className="h-16 font-Montserrat text-[#3753da] font-semibold m-auto mt-8 px-8 py-2 border border-[#3753da] rounded-full hover:bg-[#3753da] hover:text-white transition-colors md:hidden">
        Click Here
      </button>
    </div>
  );
}

export default FeatureProduct;
