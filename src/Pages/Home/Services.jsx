import React, { useContext } from "react";
import homeData from "../../data/home.js";
import Marquee from "react-fast-marquee";
import { HoverContext } from "../../HoverContext.jsx";

const Services = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);

  return (
    <div className="bg-bgColor p-3 sm:p-6 w-full h-[200px] sm:min-h-[260px] border-solid border-2 border-borderColor rounded-2xl flex flex-col justify-between col-span-2 md:col-span-3">
      <h3
        className="text-grayColor self-start text-[14px] sm:text-base"
        onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}
      >
        Services:
      </h3>
      <div>
        <div className="flex overflow-x-scroll hide-scroll">
          <Marquee
            pauseOnHover
            speed={50}
            delay={0.5}
            className="cursor-pointer"
          >
            {homeData.services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-start gap-4 service-group group mr-5 h-full"
                  style={{ "--color": service.color }}
                >
                  <div
                    className={`bg-borderColor flex justify-center items-center p-1 rounded-xl w-[38px] sm:w-[48px] h-[38px] sm:h-[48px] aspect-square service-img-holder cursor-pointer  service-group-icon transition-all duration-500`}
                  >
                    <service.image />
                  </div>
                  <div
                    className="flex flex-col gap-2"
                    onMouseEnter={() => setIsTextHovered(true)}
                    onMouseLeave={() => setIsTextHovered(false)}
                  >
                    <span className="text-white font-semibold service-group-name transition-all duration-400 text-[14px] md:text-base">
                      {service.name}
                    </span>
                    <p className="text-grayColor service-group-desc leading-[1.2] max-w-[180px] tracking-wide transition-all duration-400 text-[14px] md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Services;
