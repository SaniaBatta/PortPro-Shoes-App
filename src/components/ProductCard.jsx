import React from "react";

function ProductCard({ img, productName }) {
  return (
    <div className="flex flex-col items-start justify-end p-4 border rounded-lg shadow-md w-full h-full max-w-xs mx-auto">
      <div className="flex-grow flex items-center justify-center">
        <img src={img} className="object-contain h-48 w-full" alt={productName} />
      </div>
      <div className="mt-4">
        <h1 className="text-[#0d2e57] font-medium text-lg sm:text-xl md:text-2xl font-BebasNeue">
          {productName}
        </h1>
        <div className="flex items-center justify-start gap-2 font-Montserrat text-sm mt-2">
          <h2 className="text-[#3753da] font-semibold">$100.00</h2>
          <h3 className="text-[#616161] font-semibold text-xs line-through">$200</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
