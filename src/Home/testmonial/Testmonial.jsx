import React from "react";
import right from "../../assets/right.png";
import middle from "../../assets/middle.png";

const Testmonial = () => {
  return (
    <div className="container mx-auto mt-16 text-center">
      <h4 className="text-[#005F57] mb-5 font-bold">Testmonial</h4>
      <h2 className="text-4xl text-white mb-4">What's Our Clients Says</h2>
      <p className="text-white">
        Everyone has the right to freedom of thought, conscience and religion; this right includes
        freedom to change his religion or belief, and freedom, either alone or in community with
        others and in public or private
      </p>
      <div className="md:flex items-center justify-center md:gap-4 lg:gap-10 py-10 text-white">
        <div className="card w-[450px] h-[273px] bg-[#646363]">
          <div className="card-body items-center text-center">
            <div className="avatar flex flex-col items-center">
              <div className="w-16 rounded-full ring ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
        <div className="card w-[655px] h-[397px] bg-gradient-to-r from-[#9D00E7] via-[#1977A9] to-[#340076]">
          <div className="card-body items-center text-center">
            <div className="avatar flex flex-col items-center">
              <div className="w-20 rounded-full ring  ring-offset-[#9D00E7] ring-offset-2">
                <img src={middle} />
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
            <p>
              Everyone has the right to freedom of thought, conscience and religion; this right
              includes freedom to change his religion or belief, and freedom, either alone or in
              community with others and in public or private
            </p>
          </div>
        </div>
        <div className="card w-[450px] h-[273px] bg-[#646363]">
          <div className="card-body items-center text-center">
            <div className="avatar flex flex-col items-center">
              <div className="w-16 rounded-full ring ring-offset-2">
                <img src={right} />
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
            <p>
              Everyone has the right to freedom of thought, conscience and religion; this right,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
