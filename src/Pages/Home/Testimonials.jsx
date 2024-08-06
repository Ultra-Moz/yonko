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
    <div className="bg-bgColor flex flex-col gap-8 w-full p-6 h -[260px] border-solid border-2 border-borderColor rounded-2xl col-span-2">
      <h3
        className="text-grayColor self-start"
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
          className="select-none cursor-pointer w-[70%] !overflow-visible"
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
                    className={`w-[48px] rounded-xl ${
                      activeIndex === index ? "" : "opacity-60"
                    }`}
                  />
                  <span className={`font-semibold`}>{testimonial.title}</span>
                  <p className={`italic text-sm max-w-[420px]`}>
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
