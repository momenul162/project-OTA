import React from "react";
import logo from "../../assets/logo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <div className="navbar sticky flex justify-around bg-gradient-to-l from-[#04458e]  to-[#000000]">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="text-white">
          <ul>
            <li className="flex items-center gap-1">
              <MdOutlineMailOutline /> info@projectota.com
            </li>
            <li className="flex items-center gap-1">
              <BsFillTelephonePlusFill />
              +971509517784
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
