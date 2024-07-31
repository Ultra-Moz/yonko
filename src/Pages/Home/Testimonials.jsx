import React from "react";
import homeData from "../../data/home.json";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";

const Testimonials = () => (
  <div className="bg-bgColor max-w-[680px] flex flex-col gap-8 w-full p-6 min-h-[260px] border-solid border-2 border-borderColor rounded-2xl col-span-2">
    <h3 className="text-grayColor">
      Testimonials:{" "}
      <span className="text-white font-semibold">Mishra Lalavni</span>
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
        className=" select-none w-[70%] !overflow-visible"
      >
        <SplideTrack>
          {homeData.testimonials.map((testimonial, index) => {
            return (
              <SplideSlide key={index}>
                <div className="flex flex-col gap-2 w-full">
                  <img
                    src={testimonial.image}
                    alt="person"
                    className={`w-[48px] rounded-xl `}
                  />
                  <span className={`font-semibold text-white`}>
                    {testimonial.title}
                  </span>
                  <p className={`italic text-sm max-w-[400px] text-white`}>
                    {testimonial.review}
                  </p>
                </div>
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </div>
  </div>
);

export default Testimonials;
