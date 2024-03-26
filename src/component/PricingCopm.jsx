import React from "react";
import Unchecked from "./Unchecked";

const PricingCopm = ({ price, name }) => {
  return (
    <div className="py-6 px-4 text-center text-white">
      <h1 className="text-4xl mb-10">{name}</h1>
      <p className="text-xl">
        Everyone has the right to freedom of thought, conscience and religion;m to change{" "}
      </p>

      <h2 className="text-4xl font-bold text-center mt-10">BDT {price}/-</h2>
      <button className="btn bg-[#005F57] mt-10 px-10">Book Now</button>
      <div className="mt-10">
        <Unchecked />
        <Unchecked />
        <Unchecked />
      </div>
    </div>
  );
};

export default PricingCopm;
