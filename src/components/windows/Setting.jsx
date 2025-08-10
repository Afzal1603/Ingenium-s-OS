import React from "react";
import Window2 from "../Window2";
import { settingToggle } from "../../redux/slice/pcSlice";
import { useDispatch, useSelector } from "react-redux";
import { wallPapers } from "../../lib/data";
import { changeWall } from "../../redux/slice/wallSlice";
const Setting = () => {
  const settingOpen = useSelector((state) => state.setting);
  const wall = useSelector((state) => state.wall);
  const dispatch = useDispatch();
  return (
    <Window2 name={"Settings"} toggle={settingToggle} state={settingOpen}>
      <div className="w-full h-screen ">
        <div className="w-full h-1/3  p-2 flex justify-center items-center">
          <div className="w-98 h-55 bg-black">
            <img
              src={wall}
              className="w-full h-full object-center object-cover"
              alt="wallpaper"
              title="wallpaper"
            />
          </div>
        </div>
        <div className=" flex flex-wrap gap-4  justify-center w-full h-2/3  py-2 px-10 ">
          {wallPapers.map((wallpaper) => (
            <div
              onClick={() => dispatch(changeWall(wallpaper.path))}
              key={wallpaper.id}
              className="w-70 h-35 bg-amber-900 overflow-hidden cursor-pointer"
            >
              <img
                src={wallpaper.path}
                className="w-full h-full object-center object-cover"
                alt={wallpaper.name}
                title={wallpaper.name}
              />
            </div>
          ))}
        </div>
      </div>
    </Window2>
  );
};

export default Setting;
