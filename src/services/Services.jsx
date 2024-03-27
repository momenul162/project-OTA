import React from "react";
import "./Sevices.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const Services = () => {
  return (
    <div className="text-center text-white">
      <h4 className="text-[#005F57] mb-5 font-bold">Services</h4>
      <div>
        <h2 className="text-4xl text-center">We Provide User-friendly and Customized Services</h2>
        <p>
          Everyone has the right to freedom of thought, conscience and religion; this right includes
          freedom to change his religion or belief, and freedom, either alone or in community with
          others and in public or private
        </p>
      </div>

      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center"></div>
        <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
          <section
            id="slider"
            className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
          >
            <input type="radio" name="slider" id="s1" defaultChecked={false} />
            <input type="radio" name="slider" id="s2" defaultChecked={true} />
            <input type="radio" name="slider" id="s3" defaultChecked={false} />
            <input type="radio" name="slider" id="s4" defaultChecked={false} />
            <input type="radio" name="slider" id="s5" defaultChecked={false} />
            <input type="radio" name="slider" id="s6" defaultChecked={false} />
            <label htmlFor="s1" id="slide1">
              <img className="fea" src={img6} height="100%" width="100%" alt="Slide 1" />
            </label>
            <label htmlFor="s2" id="slide2">
              <img className="fea" src={img5} height="100%" width="100%" alt="Slide 2" />
            </label>

            <label htmlFor="s3" id="slide3">
              <img className="fea" src={img4} height="100%" width="100%" alt="Slide 3" />
            </label>
            <label htmlFor="s4" id="slide4">
              <img className="fea" src={img3} height="100%" width="100%" alt="Slide 4" />
            </label>
            <label htmlFor="s5" id="slide5">
              <img className="fea" src={img2} height="100%" width="100%" alt="Slide 5" />
            </label>
            <label htmlFor="s6" id="slide6">
              <img className="fea" src={img1} height="100%" width="100%" alt="Slide 6" />
            </label>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;
