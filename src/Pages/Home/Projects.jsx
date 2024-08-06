import React, { useContext, useState } from "react";
import homeData from "../../data/home.js";
import { HoverContext } from "../../HoverContext.jsx";

const Projects = () => {
  const { setIsHovered, setIsTextHovered, isHovered } = useContext(HoverContext);
  const [hoverIndex, setHoverIndex] = useState(null)

  return (
    <div className="bg-bgColor p-3 sm:p-6 h-[408px] sm:h-full border-solid border-2 border-borderColor rounded-2xl row-span-2 flex flex-col w-full">
      <h3
        className="text-grayColor self-start text-[14px] sm:text-base"
        onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}
      >
        Projects:
      </h3>
      <div className="mt-5 sm:mt-8 flex flex-col overflow-y-scroll hide-scroll items-start gap-4 xs:gap-5 sm:gap-6 max-h-[440px]">
        {homeData.projects.map((projectData, index) => {
          return (
            <div
              key={index}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="text-grayColor font-medium flex items-center justify-center text-[12px] xs:text-[14px] sm:text-base px-1 sm:px-2 py-[1px] sm:py-[2px] bg-borderColor rounded-lg">
                  {index + 1}
                </div>
                <a href={projectData.link} className={`${(isHovered && hoverIndex === index) ? 'text-orange' : 'text-white'} transition-all duration-300 ease-in-out text-[12px] xs:text-[14px] sm:text-base`} onMouseEnter={() => {
                  setHoverIndex(index)
                  setIsHovered(true)
                }
                }
                  onMouseLeave={() => {
                    setHoverIndex(null)
                    setIsHovered(false)
                  }}>{projectData.name}</a>
              </div>
              <span className="mt-4 text-grayColor font-medium text-[12px] xs:text-[14px] sm:text-base" onMouseEnter={() => setIsTextHovered(true)}
                onMouseLeave={() => setIsTextHovered(false)}>
                {projectData.startDate} • {projectData.endDate}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
