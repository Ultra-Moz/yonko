import React, { useEffect, useContext } from "react";
import Home from "./Pages/Home/index";
import { HoverContext, HoverProvider } from "./HoverContext";

const App = () => {
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot");

    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.animate(
        {
          transform: `translate(${posX}px, ${posY}px)`,
        },
        { duration: 200, fill: "forwards" }
      );
    });
  }, []);

  const { isHovered } = useContext(HoverContext);

  return (
    <HoverProvider>
      <div className="app">
        <Home />
        <div className={`cursor-dot ${isHovered ? "hovered" : ""}`}></div>
      </div>
    </HoverProvider>
  );
};

export default App;
