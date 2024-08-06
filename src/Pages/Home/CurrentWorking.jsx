import React, { useContext } from "react";
import homeData from "../../data/home.js";
import { HoverContext } from "../../HoverContext.jsx";

const CurrentWorking = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);

  return (
    <div className="tile flex flex-col items-start justify-between col-span-2 xs:col-span-1">
      <h3 className="text-grayColor text-[14px] sm:text-base" onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}>
        Currently:{" "}
        <span className="text-white font-semibold">
          {homeData.currentWork.currently}
        </span>
      </h3>
      <div className="flex flex-col items-start gap-3 sm:gap-6 ">
        <div
          className="rounded-xl w-[38px] sm:w-[40px] md:w-[48px] aspect-square flex items-center justify-center"
          style={{ backgroundColor: homeData.currentWork.imgColor }}
        >
          <img src={homeData.currentWork.image} alt="Working" />
        </div>

        <p className="text-white text-[14px] xs:text-[12px] sm:text-[14px] md:text-base tracking-wide" onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}>
          Our devs are working on{" "}
          <span style={{ color: homeData.currentWork.textColor }}>
            {homeData.currentWork.name}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CurrentWorking;
