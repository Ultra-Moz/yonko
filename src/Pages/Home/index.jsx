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
import BackgroundLines from "../../components/BackgroundLines";

const Home = () => {
  return (
    <div className="w-full flex justify-center h-full home">
      <BackgroundLines />
      <div className="wrapper w-full grid grid-cols-2 md:grid-cols-3 grid-row-7 xs:grid-row-5 relative gap-2 sm:gap-6 h-full">
        <NameSection />
        <Deck />
        <Projects />
        <Deployments /> 
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
