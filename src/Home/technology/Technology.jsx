import React from "react";
import react from "../../assets/technology/tech1.png";
import python from "../../assets/technology/tech2.png";
import node from "../../assets/technology/tech3.png";
import mysql from "../../assets/technology/tech4.png";
import aws from "../../assets/technology/tech5.png";

const Technology = () => {
  return (
    <div className="container mx-auto">
      <div className="py-20 px-4 text-center">
        <h4 className="text-[#005F57] mb-5 font-bold">Technology</h4>
        <h2 className="text-4xl font-semibold text-white mb-10">What Technology We Use</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center gap-3 justify-center ">
          <img src={react} alt="" />
          <img src={python} alt="" />
          <img src={node} alt="" />
          <img src={mysql} alt="" />
          <img src={aws} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
