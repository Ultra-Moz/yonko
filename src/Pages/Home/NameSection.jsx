import React, { useContext } from "react";
import { HoverContext } from "../../HoverContext.jsx";

const NameSection = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);

  return (
    <div className="bg-bgColor wrapper w-full min-h-[144px] xs:min-h-[260px] rounded-2xl p-3 xs:p-6 flex flex-col justify-between items-start border-solid border-2 border-borderColor col-span-2 xs:col-span-3">
      <img src="/images/logo.svg" className="w-[24px] xs:w-[48px]" alt="logo" />
      <div className="text-white flex flex-col gap-1.5 xs:gap-3">
        <h1
          className="text-[20px] xs:text-5xl font-semibold pr-3"
          onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}
        >
          Karthik Deshmukh
        </h1>
        <p
          className="font-normal text-grayColor self-start pr-2 max-w-[770px] text-[10px] xs:text-base tracking-[0.4px] leading-[1.2]"
          onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}
        >
          Well, let me paint you a picture. I’m a mechanical engineer by
          academics who decided to swap wrenches for pixels
        </p>
      </div>
    </div>
  );
};

export default NameSection;
