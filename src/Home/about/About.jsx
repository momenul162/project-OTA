import React from "react";
import Checked from "../../component/Checked";
import Topic from "../../component/Topic";
import img1 from "../../assets/Rectangle 17.png";
import img2 from "../../assets/Rectangle 18.png";
import bg from "../../assets/Vector.png";

const About = () => {
  return (
    <div className="">
      <h4 className="text-[#005F57] mt-8 text-center font-bold">About</h4>
      <div
        className="lg:flex py-10 text-white container mx-auto text-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "500px",
        }}
      >
        <div>
          <h2 className="text-4xl mb-3">What We Do</h2>
          <p>
            Everyone has the right to freedom of thought, conscience and religion; this right
            includes freedom to change his religion or belief, and freedom, either alone or in
            community with others and in public or private
          </p>

          <di className="flex flex-col gap-10 mt-10">
            <Checked />
            <Checked />
            <Checked />
            <Checked />
            <Checked />
          </di>
        </div>

        <div className="divider divider-vertical lg:divider-horizontal divider-primary"></div>

        <div>
          <h2 className="text-4xl text-center mb-3">Who We Are</h2>
          <p>
            Everyone has the right to freedom of thought, conscience and religion; this right
            includes freedom to change his religion or belief, and freedom, either alone or in
            community with others and in public or private
          </p>
          <Topic img={img1} />
          <Topic img={img2} />
        </div>
      </div>
    </div>
  );
};

export default About;
