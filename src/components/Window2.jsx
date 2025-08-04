import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWindow } from "../redux/slice/windowSlice";

const Window2 = () => {
  const windowOpen = useSelector((state) => state.window);
  const dispatch = useDispatch();
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black">
      <button
        onClick={() => dispatch(toggleWindow(windowOpen))}
        className="absolute top-2 right-2 text-white bg-amber-400 w-5 h-5 flex justify-center items-center"
      >
        X
      </button>
      Window2
    </div>
  );
};

export default Window2;
