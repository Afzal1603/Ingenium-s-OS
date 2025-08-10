import React from "react";
import Window2 from "../Window2";
import { useSelector } from "react-redux";
import { imageToggle } from "../../redux/slice/pcSlice";

const Image = () => {
  const imageOpen = useSelector((state) => state.image);
  const imagePath = useSelector((state) => state.imagePath);
  return (
    <Window2 name={"Image"} toggle={imageToggle} state={imageOpen}>
      <div className="w-full h-full flex mt-10 justify-center items-start">
        <img className="w-1/2 h-auto" src={imagePath} alt="" />
      </div>
    </Window2>
  );
};

export default Image;
