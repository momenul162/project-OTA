import React from "react";

const Topic = ({ img }) => {
  return (
    <div className="hero">
      <div className="hero-content flex-col md:flex-row">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Topic</h1>
          <p className="py-6">
            Everyone has the right to freedom of thought, conscience and religion; this right
            includes freedom to change his religion or belief, and freedom, either alone or in
            community with others and in public or private.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topic;
