import React from "react";
import Link from "next/link";

const SellerCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4">Gold Provider</div>
        <p className="text-gray-700 text-base text-justify">
          As Gold Providers, we ensure the smooth and secure transfer of gold
          from creators to enthusiasts. We uphold the highest standards of
          integrity and reliability in the process.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <span className="inline-block bg-gray-300 rounded-full px-10 py-2 text-sm font-semibold text-gray-800 mr-2 mb-2 mt-4">
          <Link href="/Seller">Seller</Link>
        </span>
      </div>
    </div>
  );
};

export default SellerCard;
