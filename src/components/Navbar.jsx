import React from "react";
import BatteryIndicator from "./BatteryIndicator";

import DateNow from "./Date";
import { LogOut } from "lucide-react";
import LogOutButton from "./LogOutButton";
const Navbar = () => {
  return (
    <div className=" bg-slate-800 h-8 flex justify-between items-center px-4 ">
      <div></div>
      <DateNow></DateNow>
      <div className="flex items-center space-x-4">
        <BatteryIndicator></BatteryIndicator>
        <LogOutButton></LogOutButton>
      </div>
    </div>
  );
};

export default Navbar;
