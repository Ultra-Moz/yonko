import React from "react";

const BackLines = () => {
  return (
    <>
      <div className="min-h-screen w-full max-w-[1078px] fixed inset-y-0 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 px-6">
        <div className={`w-full relative`}>
          <div className="absolute bg-[#1e1e1e50] w-0.5 min-h-screen right-0">
            <div className="bg-gradient-to-t from-transparent to-green absolute w-0.5 h-[200px] animate-[moveUp_7s_linear_infinite]"></div>
          </div>
          <div className="bg-[#1e1e1e50] w-0.5 min-h-screen"></div>
        </div>
        <div className="w-full relative">
          <div className="absolute bg-[#1e1e1e50] w-0.5 min-h-screen right-0"></div>
          <div className="bg-[#1e1e1e50] w-0.5 min-h-screen"></div>
        </div>
        <div className="w-full relative">
          <div className="absolute bg-[#1e1e1e50] w-0.5 min-h-screen right-0">
            <div className="bg-gradient-to-b from-transparent to-green absolute w-0.5 h-[200px] animate-[moveDown_7s_linear_infinite]"></div>
          </div>
          <div className="bg-[#1e1e1e50] w-0.5 min-h-screen absolute">
            <div className="bg-gradient-to-t from-transparent to-orange absolute w-0.5 h-[200px] animate-[moveUp_7s_linear_infinite] hidden md:block"></div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-screen grid grid-row-7 gap-2 sm:gap-6 absolute overflow-x-hidden">
        <div className="w-full h-[200px] sm:h-[260px] relative">
          <div className="bg-[#1e1e1e50] w-full h-0.5"></div>
          <div className="bg-[#1e1e1e50] w-full h-0.5 absolute bottom-0"></div>
        </div>
        <div className="w-full h-[200px] sm:h-[260px] relative">
          <div className="bg-[#1e1e1e50] w-full h-0.5"></div>
          <div className="bg-[#1e1e1e50] w-full h-0.5 absolute bottom-0"></div>
        </div>
        <div className="w-full h-[200px] sm:h-[260px] relative">
          <div className="bg-[#1e1e1e50] w-full h-0.5"></div>
          <div className="bg-[#1e1e1e50] w-full h-0.5 absolute bottom-0">
            <div className="bg-gradient-to-l from-transparent to-orange absolute w-[200px] h-[2px] animate-[moveLeft_7s_linear_infinite]"></div>
          </div>
        </div>
        <div className="w-full h-[200px] sm:h-[260px] relative">
          <div className="bg-[#1e1e1e50] w-full h-0.5"></div>
          <div className="bg-[#1e1e1e50] w-full h-0.5 absolute bottom-0">
            <div className="bg-gradient-to-r from-transparent to-blue absolute w-[200px] h-[2px] animate-[moveRight_7s_linear_infinite]"></div>
          </div>
        </div>
        <div className="w-full h-[200px] sm:h-[260px] relative">
          <div className="bg-[#1e1e1e50] w-full h-0.5">
            <div className="bg-gradient-to-l from-transparent to-blue absolute w-[200px] h-[2px] animate-[moveLeft_7s_linear_infinite]"></div>
          </div>
          <div className="bg-[#1e1e1e50] w-full h-0.5 absolute bottom-0">
            <div className="bg-gradient-to-l from-transparent to-orange absolute w-[200px] h-[2px] animate-[moveLeft_7s_linear_infinite]"></div>
          </div>
        </div>
        <div className="w-full h-[200px] sm:h-[260px] relative md:hidden">
          <div className="bg-[#1e1e1e50] w-full h-0.5"></div>
          <div className="bg-[#1e1e1e50] w-full h-0.5 absolute bottom-0"></div>
        </div>
        <div className="w-full h-[200px] sm:h-[260px] relative md:hidden">
          <div className="bg-[#1e1e1e50] w-full h-0.5"></div>
          <div className="bg-[#1e1e1e50] w-full h-0.5 absolute bottom-0"></div>
        </div>
        <div className="w-full h-[200px] sm:h-[260px] relative xs:hidden">
          <div className="bg-[#1e1e1e50] w-full h-0.5"></div>
          <div className="bg-[#1e1e1e50] w-full h-0.5 absolute bottom-0"></div>
        </div>
      </div>
    </>
  );
};

export default BackLines;
