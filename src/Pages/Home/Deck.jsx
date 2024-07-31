import React from "react";
import homeData from "../../data/home.json";

const Deck = () => {
  return (
    <div className="tile flex flex-col items-start justify-between self-start">
      <h3 className="text-grayColor">Our Deck:</h3>
      <div className="flex flex-wrap gap-2">
        {homeData.skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="bg-borderColor px-[10px] py-2 flex rounded-lg text-grayColor cursor-pointer hover:text-white hover:font-semibold"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Deck;
