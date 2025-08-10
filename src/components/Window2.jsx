import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { X, Minimize } from "lucide-react";
const Window2 = ({ children, toggle, state, name }) => {
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
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.1 },
      }}
      drag={minimize}
      dragConstraints={{
        left: constraintPadding,
        top: constraintPadding,
        right: windowSize.width - componentSize.width - constraintPadding,
        bottom: windowSize.height - componentSize.height - constraintPadding,
      }}
      ref={windowRef}
      dragMomentum={false}
      className={`absolute rounded-t-md ${
        minimize
          ? "top-1/4 left-1/4 w-[400px] h-[400px]"
          : "top-0 left-0 w-full h-full"
      } bg-black overflow-hidden`}
    >
      <div className=" bg-slate-800 rounded-t-md w-full h-8 flex mb-2 sticky">
        <button
          onClick={() => dispatch(toggle(state))}
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
        <h1 className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold border-zinc-500 border-b-3">
          {name}
        </h1>
      </div>
      <div className="overflow-hidden w-screen h-full">{children}</div>
    </motion.div>
  );
};

export default Window2;
