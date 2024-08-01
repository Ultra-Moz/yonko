import React, { useContext } from "react";
import homeData from "../../data/home.js";
import { HoverContext } from "../../HoverContext.jsx";

const Deck = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);

  return (
    <div className="tile flex flex-col items-start justify-between self-start">
      <h3 className="text-grayColor" 
       onMouseEnter={() => setIsTextHovered(true)}
onMouseLeave={() => setIsTextHovered(false)}>Our Deck:</h3>
      <div className="flex flex-wrap gap-2 overflow-y-scroll max-h-[150px] hide-scroll">
        {homeData.skills.map((skill, index) => {
          return (
            <div
              key={index}
                className="bg-borderColor px-[10px] py-2 flex rounded-lg text-grayColor cursor-pointer hover:text-white hover:font-semibold hover:bg-orange transition-all duration-200 ease-in-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
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
