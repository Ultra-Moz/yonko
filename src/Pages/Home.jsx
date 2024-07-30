import React from "react";
import NameSection from "./Home/NameSection"
import Deployments from "./Home/Deployments";
import CurrentWorking from "./Home/CurrentWorking";
import Projects from "./Home/Projects";
import Deck from "./Home/Deck";
import BasedIn from "./Home/BasedIn";
import Services from "./Home/Services";
import Socials from "./Home/Socials";

const Home = () => {
  return <div className="w-full flex justify-center my-16">
    <div className="container">

    <NameSection/>
    <Deployments/>
    <CurrentWorking/>
    <Projects/>
    <Deck/>
    <BasedIn/>
    <Services/>
    <Socials/>


    </div>
  </div>
};

export default Home;
