import React from "react";
import logo from "../../assets/logo.png";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import bgBall from "../../assets/footer-bg-ball.png";
import Subscribe from "../subscribe/Subscribe";

const Footer = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-[#000000] via-[#005F57] to-[#5b194d] pt-32 relative">
        <Subscribe />
        <div className="container mx-auto">
          <div className="p-10 grid md:grid-cols-4 gap-4 text-white">
            <aside>
              <img className="mb-3" src={logo} alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="m-4">
                <h3 className="text-3xl mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <button>
                    <FaTwitter />
                  </button>
                  <button>
                    <FaFacebookF />
                  </button>
                  <button>
                    <FaLinkedin />
                  </button>
                  <button>
                    <FiInstagram />
                  </button>
                </div>
              </div>
            </aside>
            <div>
              <ul>
                <h3 className="text-3xl mb-4">Products</h3>
                <li>Web Applications</li>
                <li>Mobile Applications</li>
                <li>Travel API Soluations</li>
                <li>Management Softwares</li>
                <li>Web Applications</li>
              </ul>
            </div>
            <div>
              <ul>
                <h3 className="text-3xl mb-4">Resources</h3>
                <li>Blogs</li>
                <li>Testimonials</li>
                <li>Complete Products</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="flex items-center gap-1">
                  <MdOutlineMailOutline />
                  siyamkkg13@gmail.com
                </li>

                <li className="flex items-center gap-1">
                  <BsFillTelephonePlusFill />
                  +8800190000000
                </li>
                <li className="flex items-center gap-1">
                  <FaLocationDot />
                  Dhaka ,BAngladesh
                </li>
                <h4 className="text-2xl mt-3">Privacy</h4>
                <li>Terams & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
