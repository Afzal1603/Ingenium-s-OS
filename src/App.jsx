import React from "react";
import Window from "./components/window";
import Window2 from "./components/Window2";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

const App = () => {
  const windowOpen = useSelector((state) => state.window);

  return (
    <div className="overflow-hidden w-screen h-screen">
      <Navbar></Navbar>
      <Window></Window>
      {windowOpen.val && windowOpen.count == 2 && <Window2></Window2>}
    </div>
  );
};

export default App;
