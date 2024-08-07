import React, { useContext, useState } from "react";
import homeData from "../../data/home.js";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import { HoverContext } from "../../HoverContext.jsx";

const Testimonials = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const [personName, setPersonName] = useState(
    homeData.testimonials[0]?.name || ""
  );

  const handleSlideChange = (splide) => {
    console.log(splide.index);

    setActiveIndex(splide.index);
    setPersonName(homeData.testimonials[splide.index]?.name || "");
  };

  return (
    <div className="bg-bgColor flex flex-col gap-3 xs:gap-6 sm:gap-8 w-full p-3 sm:p-6 h-[200px] sm:h-[260px] border-solid border-2 border-borderColor rounded-2xl col-span-2">
      <h3
        className="text-grayColor self-start text-[14px] sm:text-base"
        onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}
      >
        Testimonials:{" "}
        <span className="text-white font-semibold">{personName}</span>
      </h3>
      <div className="w-full overflow-hidden">
        <Splide
          hasTrack={false}
          options={{
            type: "loop",
            pagination: false,
            perPage: 1,
            gap: "1rem",
            arrows: false,
            autoplay: true,
            interval: 4000,
            speed: 1000,
          }}
          onMove={(splide) => handleSlideChange(splide)}
          className="select-none cursor-pointer w-full sm:w-[70%] md:w-full lg:w-[70%] !overflow-visible"
        >
          <SplideTrack>
            {homeData.testimonials.map((testimonial, index) => (
              <SplideSlide
                key={index}
                className={
                  activeIndex === index ? "text-white" : "text-grayColor"
                }
              >
                <div className="flex flex-col gap-2 w-full">
                  <img
                    src={testimonial.image}
                    alt="person"
                    className={`w-[38px] sm:w-[48px] rounded-xl ${
                      activeIndex === index ? "" : "opacity-60"
                    }`}
                  />
                  <span className={`font-semibold text-sm sm:text-base`}>
                    {testimonial.title}
                  </span>
                  <p
                    className={`italic  sm:max-w-[420px] text-[10px] xs:text-[12px] sm:text-[14px]`}
                  >
                    {testimonial.review}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
