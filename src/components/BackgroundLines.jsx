import React from "react";

const BackgroundLines = () => {
  return (
    <>
      <div className="fixed inset-0 w-full h-full container flex justify-between -z-10 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 ">
        <div className="h-full w-0.5 bg-[#1e1e1e70]"></div>
        <div>
          <div className="h-full w-0.5 bg-[#1e1e1e70] absolute left-[325px]">
            <div className="bg-gradient-to-t from-transparent to-green absolute w-0.5 h-[200px] animate-[moveUp_7s_linear_infinite]"></div>
          </div>
          <div className="h-full w-0.5 bg-[#1e1e1e70] absolute left-[352px]"></div>
        </div>
        <div>
          <div className="h-full w-0.5 bg-[#1e1e1e70] absolute right-[325px] "></div>
          <div className="h-full w-0.5 bg-[#1e1e1e70] absolute right-[352px] ">
            <div className="bg-gradient-to-t from-transparent to-orange absolute w-0.5 h-[200px] animate-[moveUp_7s_linear_infinite]"></div>
          </div>
        </div>
        <div className="h-full w-0.5 bg-[#1e1e1e70]">
          <div className="bg-gradient-to-b from-transparent to-green absolute w-0.5 h-[200px] animate-[moveDown_7s_linear_infinite]"></div>
        </div>
      </div>
      <div className="absolute flex flex-col w-full h-full -z-10 ">
        <div className="h-0.5 w-full bg-[#1e1e1e70]"></div>
        <div className="">
          <div className="h-0.5 w-full bg-[#1e1e1e70] absolute top-[258px]"></div>
          <div className="h-0.5 w-full bg-[#1e1e1e70] absolute top-[284px]"></div>
        </div>
        <div className="  ">
          <div className="h-0.5 w-full bg-[#1e1e1e70] absolute top-[542px]">
            {" "}
          </div>
          <div className="h-0.5 w-full bg-[#1e1e1e70] absolute top-[568px]"></div>
        </div>
        <div className="">
          <div className="h-0.5 w-full bg-[#1e1e1e70] absolute top-[826px]">
            <div className="bg-gradient-to-l from-transparent to-orange absolute w-[200px] h-[2px] animate-[moveLeft_7s_linear_infinite]"></div>
          </div>
          <div className="h-0.5 w-full bg-[#1e1e1e70] absolute top-[852px]"></div>
        </div>
        <div className="">
          <div className="h-0.5 w-full bg-[#1e1e1e70] absolute top-[1110px]">
            <div className="bg-gradient-to-r from-transparent to-blue absolute w-[200px] h-[2px] animate-[moveRight_7s_linear_infinite]"></div>
          </div>
          <div className="h-0.5 w-full bg-[#1e1e1e70] absolute top-[1136px]">
            <div className="bg-gradient-to-l from-transparent to-blue absolute w-[200px] h-[2px] animate-[moveLeft_7s_linear_infinite]"></div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-[#1e1e1e70] absolute top-[1394px]">
          <div className="bg-gradient-to-l from-transparent to-orange absolute w-[200px] h-[2px] animate-[moveLeft_7s_linear_infinite]"></div>
        </div>
      </div>
    </>
  );
};

export default BackgroundLines;
