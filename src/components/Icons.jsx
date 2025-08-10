import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Icons = ({ figcaption, Icon, top, toggle }) => {
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
      onDoubleClick={() => {
        dispatch(toggle(windowOpen));
      }}
      dragConstraints={constraints}
      dragMomentum={false}
      dragElastic={0}
      className={`mt-.5 absolute ${top} left-0 w-16 h-22 flex flex-col hover:text-white transition-all justify-center items-center cursor-pointer hover:bg-red-50/5 rounded-md `}
    >
      {<img src={Icon} size={60} strokeWidth="1" />}
      <figcaption className="font-medium text-[10px] text-center ">
        {figcaption}
      </figcaption>
    </motion.figure>
  );
};

export default Icons;
