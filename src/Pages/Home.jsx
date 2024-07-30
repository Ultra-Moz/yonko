import React from "react";
import NameSection from "./Home/NameSection"
import Deployments from "./Home/Deployments";
import CurrentWorking from "./Home/CurrentWorking";

const Home = () => {
  return <div className="w-full flex justify-center my-16">
    <div className="container">

    <NameSection/>
    <Deployments/>
    <CurrentWorking/>
    </div>
  </div>
};

export default Home;
