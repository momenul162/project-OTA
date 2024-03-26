import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Sevices.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const Services = () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: "auto" },
  });

  return (
    <div>
      <div>
        <h2 className="text-4xl text-center">We Provide User-friendly and Customized Services</h2>
        <p>
          Everyone has the right to freedom of thought, conscience and religion; this right includes
          freedom to change his religion or belief, and freedom, either alone or in community with
          others and in public or private
        </p>
      </div>

      <div ref={sliderRef} className="keen-slider">
        <div
          className="keen-slider__slide number-slide1"
          style={{ maxWidth: 150, minWidth: 150, backgroundImage: `url(${img6})` }}
        ></div>
        <div
          className="keen-slider__slide number-slide2"
          style={{ maxWidth: 100, minWidth: 100, backgroundImage: `url(${img5})` }}
        ></div>
        <div
          className="keen-slider__slide number-slide3"
          style={{ maxWidth: 200, minWidth: 200, backgroundImage: `url(${img4})` }}
        ></div>
        <div
          className="keen-slider__slide number-slide4"
          style={{ maxWidth: 500, minWidth: 500, backgroundImage: `url(${img1})` }}
        ></div>
        <div
          className="keen-slider__slide number-slide5"
          style={{ maxWidth: 150, minWidth: 150, backgroundImage: `url(${img2})` }}
        ></div>
        <div
          className="keen-slider__slide number-slide6"
          style={{ maxWidth: 75, minWidth: 75, backgroundImage: `url(${img3})` }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
