import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Loader, Loader2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logToggle } from "../redux/slice/logOutSlice";
const Logout = () => {
  // const [ani, setAni] = useState(false);
  const ani = useSelector((state) => state.logOut);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const headingRef = useRef(null);
  useEffect(() => {
    dispatch(logToggle(false)); // force reset on mount
  }, []);

  /*******  8b8d7db7-599f-4898-8f5e-b39b0edb610d  *******/
  const handleMouseMove = (e) => {
    const rect = headingRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={
        !ani
          ? { y: -1000, opacity: 0, transition: { duration: 1, delay: 1 } }
          : { y: 0, opacity: 1, transition: { duration: 1, delay: 1 } }
      }
      className="absolute z-50 top-0 left-0 w-screen h-screen bg-black flex justify-center "
    >
      {/* <img
        className="absolute top-0 left-100 w-40 h-40 rounded-full m-4"
        src="/public/misc/user2.png"
        alt=""
      /> */}
      <h1
        ref={headingRef}
        onMouseMove={handleMouseMove}
        className="absolute top-50 bg-amber-100 p-8 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent text-6xl font-semibold bg-clip-text  "
        style={{
          border: "8px solid transparent",
          borderImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 200, 0, 0.8), transparent 80%) 1`,
        }}
      >
        Ingenium OS
        <span></span>
      </h1>
      {ani && (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { dutaion: 1 } }}
          className="text-white top-118 text-xl font-semibold absolute animate-pulse"
        >
          Logging You In
        </motion.h1>
      )}

      <button
        onClick={() => dispatch(logToggle(ani))}
        className="absolute top-100 text-white  hover:bg-amber-500  py-2 px-4 rounded-sx text-xl hover:cursor-pointer outline-2 outline-amber-500  transition-all duration-300"
      >
        Log In
      </button>
    </motion.div>
  );
};

export default Logout;
