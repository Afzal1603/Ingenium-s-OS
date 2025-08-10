import { useState, useRef, useEffect } from "react";
import Icons from "./Icons";
import { Laptop, Camera } from "lucide-react";
import { cameraToggle } from "../redux/slice/windowSlice";
import {
  browserToggle,
  galleryToggle,
  pcToggle,
  settingToggle,
} from "../redux/slice/pcSlice";
import { useSelector } from "react-redux";
const Window = () => {
  const wall = useSelector((state) => state.wall);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowContextMenu(false);
    }
  };

  useEffect(() => {
    if (showContextMenu) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showContextMenu]);

  return (
    <div
      className="overflow-hidden w-screen h-screen bg-gray-100 relative "
      onContextMenu={handleContextMenu}
    >
      <div>
        <img className="w-screen h-screen object-cover" src={wall} alt="" />
      </div>
      <Icons
        figcaption="This PC"
        top="top-0"
        Icon="/icons/this-pc.png"
        toggle={pcToggle}
      />
      <Icons
        figcaption="Camera"
        top="top-20"
        Icon="/icons/camera.png"
        toggle={cameraToggle}
      />
      <Icons
        figcaption="Settings"
        top="top-40"
        Icon="/icons/setting.png"
        toggle={settingToggle}
      />
      <Icons
        figcaption="Gallery"
        top="top-60"
        Icon="/icons/folder.png"
        toggle={galleryToggle}
      />
      <Icons
        figcaption="Chrome"
        top="top-80"
        Icon="/icons/chrome.png"
        toggle={browserToggle}
      />

      {/* Context Menu */}
      {showContextMenu && (
        <div
          ref={menuRef}
          className="absolute bg-white  shadow-lg rounded-md border p-2 z-50"
          style={{ top: position.y, left: position.x }}
        >
          <p
            onClick={() => window.location.reload()}
            className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
          >
            Refresh
          </p>
          <p className="px-2 py-1 hover:bg-gray-100 cursor-pointer">Option 2</p>
          <p className="px-2 py-1 hover:bg-gray-100 cursor-pointer">Close</p>
        </div>
      )}
    </div>
  );
};

export default Window;
