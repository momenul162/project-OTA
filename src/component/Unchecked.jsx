import React from "react";

const Unchecked = () => {
  return (
    <p className="flex items-center gap-2 text-sm mb-8">
      <input
        type="checkbox"
        checked={false}
        className="checkbox-sm checkbox rounded-full bg-white"
      />
      Everyone has the right to freedom
    </p>
  );
};

export default Unchecked;
