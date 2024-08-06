import React, { useEffect, useContext } from "react";
import { HoverContext } from "../HoverContext";

const Cursor = () => {
  const { isHovered, isTextHovered } = useContext(HoverContext);

  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot");

    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.animate(
        {
          transform: `translate(${posX}px, ${posY}px) translate(-50%, -50%)`,
        },
        { duration: 100, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={`cursor-dot ${isHovered ? "hovered" : ""} ${
        isTextHovered ? "text-hovered" : ""
      } hidden md:block`}
    ></div>
  );
};

export default Cursor;
