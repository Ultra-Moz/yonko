import React from "react";
import homeData from "../../data/home.json";

const CurrentWorking = () => {
  return (
    <div className="tile flex flex-col items-start justify-between ">
      <h3 className="text-grayColor">
        Currently:{" "}
        <span className="text-white font-semibold">
          {homeData.currentWork.currently}
        </span>
      </h3>
      <div className="flex flex-col items-start gap-6 ">
        <div
          className="rounded-xl p-3 flex items-center justify-center"
          style={{ backgroundColor: homeData.currentWork.color }}
        >
          <img src={homeData.currentWork.image} alt="Working" />
        </div>

        <p className="text-white">
          Our devs are working on{" "}
          <span style={{ color: homeData.currentWork.color }}>
            {homeData.currentWork.name}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CurrentWorking;
