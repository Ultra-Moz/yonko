import React, { useContext } from "react";
import homeData from "../../data/home.js";
import { HoverContext } from "../../HoverContext.jsx";

const Deployments = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);


  return (
    <div className="tile flex flex-col items-start justify-between self-start w-full">
      <h3 className="text-grayColor self-start text-[14px] sm:text-base" onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}>Deployments:</h3>
      <div className="flex flex-col gap-1 xs:gap-2 sm:gap-3 md:gap-6">
        <span className="text-[24px] sm:text-4xl  md:text-5xl text-white font-bold self-start" onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}>
          {homeData.deployments}
        </span>
        <p className="text-grayColor text-[12px] sm:text-[14px] md:text-base" onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}>Successful deployments so far</p>
      </div>
    </div>
  );
};

export default Deployments;
