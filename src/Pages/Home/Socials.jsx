import React, { useState } from "react";
import homeData from "../../data/home.json";
const Socials = () => {
  const [social, setSocial] = useState("karthikdeshmukh35");
  //improve discord link, name and hovers
  const handleClick = (name) => {
    if (name === "discord") {
      setSocial("yonko_kd");
    }
  };
  return (
    <div className="tile flex flex-col justify-between">
      <h3 className="text-grayColor">Socials:</h3>
      <div className="flex flex-col gap-6">
        <p className="text-white">
          karthikdeshmukh35<span className="text-grayColor">@gmail.com</span>
        </p>
        <div className="flex justify-between">
          {homeData.socials.map((social, index) => {
            return (
              <div
                className="image-wrapper"
                onClick={() => handleClick(social.name)}
                key={index}
              >
                <a href={social.link}>
                  <img
                    src={social.image}
                    className="svg-icon"
                    alt={social.name}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Socials;
