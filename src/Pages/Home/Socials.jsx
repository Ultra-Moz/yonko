import React, { useState } from "react";
import homeData from "../../data/home.js";


const Socials = () => {
  const [socialName, setSocialName] = useState("");
  const [hoverSocial, setHoverSocial] = useState("")

  const handleClick = (name) => {
    if (socialName === 'yonko_kd'){
      setSocialName("")
    } else if(name === "discord"){
      setSocialName("yonko_kd");
    }
  };

  const handleHover = (name) => {
    if(hoverSocial === 'yonko_kd' && name === "discord"){
      setHoverSocial("")
    } else if(name === "discord"){
      setHoverSocial("yonko_kd")
    }
  }

  return (
    <div className="tile flex flex-col justify-between">
      <h3 className="text-grayColor">Socials:</h3>
      <div className="flex flex-col gap-6">
        <p className="text-white">
          {socialName || hoverSocial ? "yonko_kd" : "kartikhdeshmukh"}<span className="text-grayColor">{socialName || hoverSocial ? "" : "@gmail.com"}</span>
        </p>
        <div className="flex justify-between">
          {homeData.socials.map((social, index) => (
            social.link ? (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <div className="image-wrapper text-white hover:text-black  transition-all duration-300 ease-in-out" >
                  <social.image/>
                </div>
              </a>
            ) : (
              <span key={index}>
                <div className={`image-wrapper hover:text-black transition-all active:opacity-50 duration-300 ease-in-out ${(socialName || hoverSocial) ? "text-black !bg-white" : "text-white "}`} onMouseLeave={()=> handleHover(social.name.toLowerCase())} onMouseEnter={()=> handleHover(social.name.toLowerCase())} onClick={() => handleClick(social.name.toLowerCase())}>
                  <social.image/>
                </div>
              </span>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
