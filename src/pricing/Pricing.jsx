import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Pricing.css";

// import required modules
import { EffectCards } from "swiper/modules";
import PricingCopm from "../component/PricingCopm";

const Pricing = () => {
  return (
    <div className="text-center container mx-auto">
      <h4 className="text-[#005F57] my-5 font-bold">Pricing</h4>
      <h3 className="text-4xl text-white my-4">See Our Pricing</h3>
      <p className="text-white mb-10">
        Everyone has the right to freedom of thought, conscience and religion; this right includes
        freedom to change his religion or belief, and freedom, either alone or in community with
        others and in public or private
      </p>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[450px]"
      >
        <SwiperSlide className="h-[700px] bg-gradient-to-r from-stone-500 via-[#1977A9] to-stone-500">
          <PricingCopm price={"20, 0000"} name="OTA White Label" />
        </SwiperSlide>
        <SwiperSlide className="h-[700px] bg-gradient-to-r from-stone-500 via-[#1977A9] to-stone-500">
          <PricingCopm price={"30,0000"} name="Full OTA Portal" />
        </SwiperSlide>
        <SwiperSlide className="h-[700px] bg-gradient-to-r from-stone-500 via-[#1977A9] to-stone-500">
          <PricingCopm price={"20,0000"} name="OTA White Label" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Pricing;
