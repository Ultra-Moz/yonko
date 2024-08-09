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
import BackLines from "../../components/BackLines";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center h-full home">
      {/* <BackgroundLines /> */}
      <BackLines />
      <div className="wrapper w-full grid grid-cols-2 md:grid-cols-3 grid-row-7 xs:grid-row-5 relative gap-2 sm:gap-6 h-full">
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
