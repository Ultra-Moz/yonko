import React, { useContext } from "react";
import homeData from "../../data/home.js";
import { HoverContext } from "../../HoverContext.jsx";

const Deck = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);

  return (
    <div className="tile flex flex-col items-start justify-between w-full row-span-1">
      <h3 className="text-grayColor text-[14px] sm:text-base" 
       onMouseEnter={() => setIsTextHovered(true)}
onMouseLeave={() => setIsTextHovered(false)}>Our Deck:</h3>
      <div className="flex flex-wrap gap-1 sm:gap-2 overflow-y-scroll max-h-[160px] hide-scroll">
        {homeData.skills.map((skill, index) => {
          return (
            <div
              key={index}
                className="bg-borderColor text-[10px] xs:text-[12px] sm:text-base px-[6px] sm:px-[10px] py-1 sm:py-2 flex rounded-lg text-grayColor cursor-pointer hover:text-white hover:font-semibold hover:bg-orange transition-all duration-200 ease-in-out"
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
