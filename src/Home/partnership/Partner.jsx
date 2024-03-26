import React from "react";
import img from "../../assets/partner/Frame 37.png";
import bg from "../../assets/partnerbg.png";

const Partner = () => {
  return (
    <div className="py-10 mb-10">
      <div className="flex flex-col items-center  py-10">
        <h4 className="text-[#005F57] mb-5 font-bold">Partner</h4>
        <h2 className="text-4xl text-center text-white font-semibold mb-10">
          Our Key Partnerships
        </h2>
        <img style={{ backgroundImage: `url(${bg})` }} src={img} alt="" />
      </div>
    </div>
  );
};

export default Partner;
