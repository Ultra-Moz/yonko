import React from "react";
import NameSection from "./NameSection";
import Deployments from "./Deployments";
import CurrentWorking from "./CurrentWorking";
import Projects from "./Projects";
import Deck from "./Deck";
import BasedIn from "./BasedIn";
import Services from "./Services";
import Socials from "./Socials";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="w-full flex justify-center my-16 h-full">
      <div className="container grid grid-cols-3 grid-row-5 gap-6 relative h-full">
        <div className="absolute flex justify-between w-full h-full -z-10">
          <div className="h-full w-0.5 bg-white"></div>
          <div>
            <div className="h-full w-0.5 bg-white absolute left-[325px]"></div>
            <div className="h-full w-0.5 bg-white absolute left-[351px]"></div>
          </div>
          <div>
            <div className="h-full w-0.5 bg-white absolute right-[325px]"></div>
            <div className="h-full w-0.5 bg-white absolute right-[352px]"></div>
          </div>
          <div className="h-full w-0.5 bg-white"></div>
        </div>
        <NameSection />
        <Deployments />
        <Projects />
        <Deck />
        <CurrentWorking />
        <BasedIn />
        <Services />
        <Testimonials />
        <Socials />
      </div>
    </div>
  );
};

export default Home;
