import React from "react";

const Seller = () => {
  return (
    <section className="w-full">
      <div className="">
        <button>Connect Wallet</button>
      </div>
      <div className="">
        <h1 className="">Sell to Buyer</h1>
        <input type="text" />
        <input type="text" />
        <span>
          <button>Sell</button>
        </span>
      </div>
      <div className="">
        <h1 className="">Check Status</h1>
        <input type="text" />
        <span>
          <button>Details</button>
        </span>
      </div>
      <div className="">
        <p className="id"></p>
        <p className="Maker"></p>
        <p className="Seller"></p>
        <p className="Buyer"></p>
        <p className="Weight"></p>
      </div>
    </section>
  );
};

export default Seller;
