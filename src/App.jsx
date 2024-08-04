import React from "react";
import Home from "./Pages/Home/index";
import { HoverProvider } from "./HoverContext";
import Cursor from "./components/Cursor";

const App = () => {

  return (
    <HoverProvider>
      {/* <div className="absolute w-full h-full -z-10">
        <div className="h-full w-0.5 bg-[#1e1e1e] absolute"></div>
        <div>
          <div className="h-full w-0.5 bg-[#1e1e1e] absolute left-[325px]"></div>
          <div className="h-full w-0.5 bg-[#1e1e1e] absolute left-[351px]"></div>
        </div>
        <div>
          <div className="h-full w-0.5 bg-[#1e1e1e] absolute right-[325px]"></div>
          <div className="h-full w-0.5 bg-[#1e1e1e] absolute right-[352px]"></div>
        </div>
        <div className="h-full w-0.5 bg-[#1e1e1e]"></div>
      </div> */}
      {/* <div className="absolute flex flex-col w-full h-full -z-10 ">
        <div className="h-0.5 w-full bg-[#1e1e1e]"></div>
        <div className="">
          <div className="h-0.5 w-full bg-[#1e1e1e] absolute top-[258px]"></div>
          <div className="h-0.5 w-full bg-[#1e1e1e] absolute top-[284px]"></div>
        </div>
        <div className="  ">
          <div className="h-0.5 w-full bg-[#1e1e1e] absolute top-[542px]"></div>
          <div className="h-0.5 w-full bg-[#1e1e1e] absolute top-[568px]"></div>
        </div>
        <div className="">
          <div className="h-0.5 w-full bg-[#1e1e1e] absolute top-[826px]"></div>
          <div className="h-0.5 w-full bg-[#1e1e1e] absolute top-[852px]"></div>
        </div>
        <div className="">
          <div className="h-0.5 w-full bg-[#1e1e1e] absolute top-[1110px]"></div>
          <div className="h-0.5 w-full bg-[#1e1e1e] absolute top-[1136px]"></div>
        </div>
        <div className="h-0.5 w-full bg-[#1e1e1e] absolute top-[1394px]"></div>
      </div> */}
      <Home />
      <Cursor />
    </HoverProvider>
  );
};

export default App;
