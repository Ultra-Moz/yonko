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
    <div className="w-full flex justify-center my-16">
      <div className="container grid grid-cols-3 grid-row-5 gap-6">
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
