import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWindow } from "../redux/slice/windowSlice";
import { Cross, Crosshair, Minimize, X } from "lucide-react";
import { motion } from "framer-motion";
const Window2 = ({ children }) => {
  const windowOpen = useSelector((state) => state.window);
  const [componentSize, setComponentSize] = useState({
    width: 400,
    height: 400,
  });
  const dispatch = useDispatch();
  const [minimize, setMinimize] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const windowRef = useRef(null);

  // Update drag constraints on resize
  useEffect(() => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setComponentSize({
        width: rect.width,
        height: rect.height,
      });
    }
  }, [minimize, windowSize]);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const constraintPadding = 10;

  return (
    <motion.div
      drag={minimize}
      dragConstraints={{
        left: constraintPadding,
        top: constraintPadding,
        right: windowSize.width - componentSize.width - constraintPadding,
        bottom: windowSize.height - componentSize.height - constraintPadding,
      }}
      ref={windowRef}
      dragMomentum={false}
      className={`absolute ${
        minimize
          ? "top-1/4 left-1/4 w-[400px] h-[400px]"
          : "top-0 left-0 w-full h-full"
      } bg-black overflow-hidden`}
    >
      <div className=" bg-slate-800 w-full h-8 flex">
        <button
          onClick={() => dispatch(toggleWindow(windowOpen))}
          className={`top-2 right-2 text-white hover:bg-slate-700  w-8 h-8 flex justify-center items-center`}
        >
          <X size={20} />
        </button>
        <button
          onClick={() => setMinimize(!minimize)}
          className=" top-2 right-2 text-white hover:bg-slate-700  w-8 h-8  flex justify-center items-center"
        >
          <Minimize size={20} />
        </button>
      </div>
      <div>{children}</div>
    </motion.div>
  );
};

export default Window2;
