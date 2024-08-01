import React, { useContext } from "react";
import homeData from "../../data/home.js";
import { HoverContext } from "../../HoverContext.jsx";

const CurrentWorking = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);

  return (
    <div className="tile flex flex-col items-start justify-between ">
      <h3 className="text-grayColor" onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}>
        Currently:{" "}
        <span className="text-white font-semibold">
          {homeData.currentWork.currently}
        </span>
      </h3>
      <div className="flex flex-col items-start gap-6 ">
        <div
          className="rounded-xl p-3 flex items-center justify-center"
          style={{ backgroundColor: homeData.currentWork.imgColor }}
        >
          <img src={homeData.currentWork.image} alt="Working" />
        </div>

        <p className="text-white" onMouseEnter={() => setIsTextHovered(true)}
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
