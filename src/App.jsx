import React from "react";
import Window from "./components/window";
import Window2 from "./components/Window2";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

import Camera from "./components/Camera";
import ThisPC from "./components/ThisPC";

const App = () => {
  const windowOpen = useSelector((state) => state.window);

  return (
    <div className="overflow-hidden w-screen h-screen">
      <Navbar></Navbar>
      <Window></Window>
      {/* <Camera></Camera> */}

      {windowOpen.val && windowOpen.count == 2 && <Camera></Camera>}
    </div>
  );
};

export default App;
