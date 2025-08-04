import { useState, useRef, useEffect } from "react";
import Icons from "./Icons";

const Window = () => {
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
      className="w-screen h-screen bg-gray-100 relative overflow-hidden"
      onContextMenu={handleContextMenu}
    >
      <div>
        <img
          className="w-screen h-screen object-cover"
          src="wallpaper/wall-1.jpg"
          alt=""
        />
      </div>
      <Icons />

      {/* Context Menu */}
      {showContextMenu && (
        <div
          ref={menuRef}
          className="absolute bg-white shadow-lg rounded-md border p-2 z-50"
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
