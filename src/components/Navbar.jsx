import React from "react";
import BatteryIndicator from "./BatteryIndicator";

import DateNow from "./Date";
const Navbar = () => {
  return (
    <div className="bg-slate-800 h-8 flex justify-between items-center px-4 ">
      <div></div>
      <DateNow></DateNow>
      <BatteryIndicator></BatteryIndicator>
    </div>
  );
};

export default Navbar;
