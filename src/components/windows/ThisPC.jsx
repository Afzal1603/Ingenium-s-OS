import React from "react";
import Window2 from "../Window2";
import { useSelector } from "react-redux";
import { pcToggle } from "../../redux/slice/pcSlice";

const ThisPC = () => {
  const pcOpen = useSelector((state) => state.thispc);
  return (
    <Window2 toggle={pcToggle} state={pcOpen}>
      <div className="w-full h-full mt-7">
        <h1 className="text-amber-50 text-9xl">yo yo honey singh</h1>
      </div>
    </Window2>
  );
};

export default ThisPC;
