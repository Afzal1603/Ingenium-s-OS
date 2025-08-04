import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Laptop } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWindow } from "../redux/slice/windowSlice";
const Icons = () => {
  const windowOpen = useSelector((state) => state.window);
  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const dispatch = useDispatch();

  // Set constraints based on viewport and draggable size
  useEffect(() => {
    const updateConstraints = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const boxWidth = 64; // width of draggable box
      const boxHeight = 96; // height of draggable box

      setConstraints({
        left: 0,
        top: 0,
        right: vw - boxWidth,
        bottom: vh - boxHeight,
      });
    };

    updateConstraints();

    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <motion.figure
      drag
      onClick={() => {
        dispatch(toggleWindow(windowOpen));
      }}
      dragConstraints={constraints}
      dragMomentum={false} // disable momentum
      dragElastic={0} // no overshoot beyond bounds
      className="absolute top-0 left-0 w-16 h-24"
    >
      <Laptop size={60} strokeWidth="1"></Laptop>
      <figcaption className="font-medium text-[10px] text-center ">
        my computer
      </figcaption>
    </motion.figure>
  );
};

export default Icons;
