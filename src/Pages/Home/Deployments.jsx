import React, { useContext } from "react";
import homeData from "../../data/home.js";
import { HoverContext } from "../../HoverContext.jsx";

const Deployments = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);


  return (
    <div className="tile flex flex-col items-start justify-between self-start">
      <h3 className="text-grayColor" onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}>Deployments</h3>
      <div className="flex flex-col gap-6">
        <span className="text-5xl text-white font-bold" onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}>
          {homeData.deployments}
        </span>
        <p className="text-grayColor" onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}>Successful deployments so far</p>
      </div>
    </div>
  );
};

export default Deployments;
