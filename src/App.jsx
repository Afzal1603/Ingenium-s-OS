import React from "react";
import Window from "./components/window";
import Window2 from "./components/Window2";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

import Camera from "./components/windows/Camera";
import ThisPC from "./components/windows/ThisPC";
import Logout from "./components/Logout";
import Setting from "./components/windows/Setting";
import Gallery from "./components/windows/Gallery";
import Browser from "./components/windows/Browser";
import Image from "./components/windows/Image";

const App = () => {
  const cameraOpen = useSelector((state) => state.camera);
  const pcOpen = useSelector((state) => state.thispc);
  const settingOpen = useSelector((state) => state.setting);
  const galleryOpen = useSelector((state) => state.gallery);
  const browserOpen = useSelector((state) => state.browser);
  const imageOpen = useSelector((state) => state.image);

  return (
    <div className="overflow-hidden w-screen h-screen">
      <Navbar></Navbar>
      <Logout></Logout>
      <Window></Window>
      {cameraOpen && <Camera></Camera>}
      {pcOpen && <ThisPC></ThisPC>}
      {settingOpen && <Setting></Setting>}
      {galleryOpen && <Gallery></Gallery>}
      {browserOpen && <Browser />}
      {imageOpen && <Image></Image>}
    </div>
  );
};

export default App;
