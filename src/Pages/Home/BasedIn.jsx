import React, { useState, useEffect, useContext } from "react";
import { HoverContext } from "../../HoverContext.jsx";

const BasedIn = () => {
  const { setIsHovered, setIsTextHovered } = useContext(HoverContext);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    };
    return date.toLocaleTimeString("en-US", options);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Kolkata",
    });
  };

  const formattedTime = formatTime(time);
  const [hours, minutes, secondsWithPeriod] = formattedTime.split(":");
  const [seconds, period] = secondsWithPeriod.split(" ");

  return (
    <div className="tile flex flex-col justify-between w-full col-span-2 xs:col-span-1">
      <h3
        className="text-grayColor self-start text-[14px] sm:text-base"
        onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}
      >
        Based In:
      </h3>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span
            className="text-white font-semibold text-[14px] lg:text-base"
            onMouseEnter={() => setIsTextHovered(true)}
            onMouseLeave={() => setIsTextHovered(false)}
          >
            Hyd, IND <span className="text-orange">•</span> IST
          </span>
          <span
            className="text-grayColor text-[14px] sm:text-base"
            onMouseEnter={() => setIsTextHovered(true)}
            onMouseLeave={() => setIsTextHovered(false)}
          >
            {formatDate(time)}
          </span>
          <span
            className="text-white mt-6 text-[12px] md:text-[14px] lg:text-base"
            onMouseEnter={() => setIsTextHovered(true)}
            onMouseLeave={() => setIsTextHovered(false)}
          >
            {hours}:{minutes}:<span className="text-orange">{seconds}</span>{" "}
            {period}
          </span>
        </div>
        <img
          src="/images/map.svg"
          alt="Telengana state map"
          className="w-[100px] xs:w-[80px] md:w-[114px]"
        />
      </div>
    </div>
  );
};

export default BasedIn;
