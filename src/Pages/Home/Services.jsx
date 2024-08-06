import React, { useContext } from "react";
import homeData from "../../data/home.js";
import Marquee from "react-fast-marquee";
import { HoverContext } from "../../HoverContext.jsx";

const Services = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);

  return (
    <div className="bg-bgColor p-6 w-full min-h-[260px] border-solid border-2 border-borderColor rounded-2xl flex flex-col justify-between col-span-2 md:col-span-3">
      <h3
        className="text-grayColor self-start"
        onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}
      >
        Services:
      </h3>
      <div>
        <div className="flex items-start justify-start overflow-x-scroll hide-scroll gap-5">
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
                  className="flex flex-col items-start gap-4 service-group group"
                  style={{ "--color": service.color }}
                >
                  <div
                    className={`bg-borderColor flex justify-center items-center p-1 rounded-xl w-[48px] h-[48px] service-img-holder cursor-pointer  service-group-icon transition-all duration-500`}
                  >
                    <service.image />
                  </div>
                  <div
                    className="flex flex-col gap-2"
                    onMouseEnter={() => setIsTextHovered(true)}
                    onMouseLeave={() => setIsTextHovered(false)}
                  >
                    <span
                      className="text-white font-semibold service-group-name transition-all duration-400"
                    >
                      {service.name}
                    </span>
                    <p className="text-grayColor service-group-desc leading-[1.2] max-w-[180px] transition-all duration-400">
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
