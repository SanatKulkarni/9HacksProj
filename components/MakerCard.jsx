import React from "react";
import Link from "next/link";

const MakerCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-4">Gold Creator</div>
        <p className="text-gray-700 text-base text-justify">
          Our Gold Creators are the talented artisans behind each exquisite gold
          item. They transform raw gold into works of art, crafting pieces of
          beauty and value.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <span className="inline-block bg-gray-300 rounded-full px-10 py-2 text-sm font-semibold text-gray-800 mr-2 mb-2 mt-10">
          <Link href="/Maker">Maker</Link>
        </span>
      </div>
    </div>
  );
};

export default MakerCard;
