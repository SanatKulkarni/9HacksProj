import React from "react";

const Buyer = () => {
  return (
    <section className="w-full bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
      <div className="">
        <button>Connect Wallet</button>
      </div>
      <div className="">
        <h1 className="">Mark Deliverd</h1>
        <input type="text" />

        <span>
          <button>Mark Deliverd</button>
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

export default Buyer;
