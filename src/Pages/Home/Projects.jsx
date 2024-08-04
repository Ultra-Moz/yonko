import React, { useContext, useState } from "react";
import homeData from "../../data/home.js";
import { HoverContext } from "../../HoverContext.jsx";

const Projects = () => {
  const { setIsHovered, setIsTextHovered, isHovered } = useContext(HoverContext);
  const [hoverIndex, setHoverIndex] = useState(null)

  return (
    <div className="tile row-span-2 flex flex-col">
      <h3
        className="text-grayColor self-start"
        onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}
      >
        Projects:
      </h3>
      <div className="mt-8 flex flex-col overflow-y-scroll hide-scroll items-start gap-6 max-h-[440px]">
        {homeData.projects.map((projectData, index) => {
          return (
            <div
              key={index}
              className="pr-5"
            >
              <div className="flex items-center gap-3">
                <div className="text-grayColor font-medium flex items-center justify-center px-2 py-[2px] bg-borderColor rounded-lg">
                  {index + 1}
                </div>
                <a href={projectData.link} className={`${(isHovered && hoverIndex === index) ? 'text-orange' : 'text-white'} transition-all duration-300 ease-in-out`} onMouseEnter={() => {
                  setHoverIndex(index)
                  setIsHovered(true)
                }
                }
                  onMouseLeave={() => {
                    setHoverIndex(null)
                    setIsHovered(false)
                  }}>{projectData.name}</a>
              </div>
              <span className="mt-4 text-grayColor font-medium" onMouseEnter={() => setIsTextHovered(true)}
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
