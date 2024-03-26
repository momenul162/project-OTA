import React from "react";

const Subscribe = () => {
  return (
    <div className="hero absolute top-[-140px]  md:top-[-160px]">
      <div className=" md:flex items-center mt-10 justify-evenly gap-12 py-4 shadow-2xl bg-gradient-to-r from-[#2e3d47] via-[#555151] to-[#2e3d47]  rounded-lg">
        <div className="text-center sm:w-[200px] md:w-[350px]">
          <h1 className="text-4xl text-white">
            Subscribe To Our <br /> <span className="text-[#062724]">Newsletter</span>
          </h1>
          <p className="py-6 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl">
          <div className="flex border rounded-lg">
            <input
              type="text"
              className="grow px-10 py-3 rounded-lg"
              placeholder="Enter your email address"
            />
            <button className="btn border-none bg-[#073632]">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
