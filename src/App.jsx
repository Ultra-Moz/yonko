import React, { useContext } from "react";
import Home from "./Pages/Home/index";
import { HoverProvider, HoverContext } from "./HoverContext";
import Cursor from "./components/Cursor";
import BackgroundLines from "./components/BackgroundLines";

const App = () => {
  const { setIsTextHovered } = useContext(HoverContext);
  return (
    <>
      <Home />

      <div className="text-grayColor flex flex-col items-center text-[12px] md:text-[14px] lg:text-base mt-4">
        <h3
          onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}
        >
          Designed by: <span className="text-white">Karthik Deshmukh</span>
        </h3>
        <h3
          onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}
        >
          Developed by: <span className="text-white"> Moizullah Shaikh</span>
        </h3>
      </div>

      <Cursor />
    </>
  );
};

export default App;
