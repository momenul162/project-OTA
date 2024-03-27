import React from "react";

const TestmonialSlider = ({
  image = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
}) => {
  return (
    <div className="card h-full bg-gradient-to-r from-[#8306bc] via-[#145e86] to-[#380e70] text-white">
      <div className="card-body items-center text-center">
        <div className="avatar flex flex-col items-center">
          <div className="w-16 rounded-full ring ring-offset-2">
            <img src={image} />
          </div>
          <h2 className="text-xl font-bold">Jhon hed</h2>
          <p>CEO, Nextgen</p>
          <div className="rating rating-sm h-5 w-20">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
          </div>
        </div>
        <p>Everyone has the right to freedom of thought, conscience and religion; this right</p>
      </div>
    </div>
  );
};

export default TestmonialSlider;
