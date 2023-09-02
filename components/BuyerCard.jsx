import React from "react";
import Link from "next/link";

const BuyerCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4"> Gold Enthusiast</div>
        <p className="text-gray-700 text-base text-justify">
          Gold Enthusiasts are passionate about gold. They trust us to provide
          them with high-quality gold items for their investments, collections,
          or personal adornment.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center align-bottom">
        <span className="inline-block bg-gray-300 rounded-full px-10 py-2 text-sm font-semibold text-gray-800 mr-2 mb-2 mt-10">
          <Link href="/Buyer">Buyer</Link>
        </span>
      </div>
    </div>
  );
};

export default BuyerCard;
