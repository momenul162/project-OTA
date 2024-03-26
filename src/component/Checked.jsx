import React from "react";

const Checked = () => {
  return (
    <p className="flex items-center gap-2">
      <input
        type="checkbox"
        checked
        className="checkbox border-white checked:border-orange-600 [--chkbg:theme(colors.black)] [--chkfg:white]"
      />
      Travel Agency problem solucatiom
    </p>
  );
};

export default Checked;
