import React, { useContext, useState } from "react";
import homeData from "../../data/home.js";
import { HoverContext } from "../../HoverContext.jsx";


const Socials = () => {
  const {isHovered, setIsHovered, setIsTextHovered } = useContext(HoverContext);

  const [socialName, setSocialName] = useState("");
  const [hoverSocial, setHoverSocial] = useState("")

  const handleClick = (name) => {
    if (socialName === 'yonko_kd') {
      setSocialName("")
    } else if (name === "discord") {
      setSocialName("yonko_kd");
    }
  };

  const handleHover = (name) => {
    setIsHovered(!isHovered)
    if (hoverSocial === 'yonko_kd' && name === "discord") {
      setHoverSocial("")
    } else if (name === "discord") {
      setHoverSocial("yonko_kd")
    }
  }

  return (
    <div className="tile flex flex-col items-start justify-between">
      <h3 className="text-grayColor" onMouseEnter={() => setIsTextHovered(true)}
        onMouseLeave={() => setIsTextHovered(false)}>Socials:</h3>
      <div className="flex flex-col gap-6 w-full">
        <p className="text-white self-start" onMouseEnter={() => setIsTextHovered(true)}
          onMouseLeave={() => setIsTextHovered(false)}>
          {socialName || hoverSocial ? "yonko_kd" : "kartikhdeshmukh"}<span className="text-grayColor">{socialName || hoverSocial ? "" : "@gmail.com"}</span>
        </p>
        <div className="flex justify-between">
          {homeData.socials.map((social, index) => (
            social.link ? (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <div className="image-wrapper text-white hover:!bg-orange  transition-all duration-200 ease-in-out" onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)} >
                  <social.image />
                </div>
              </a>
            ) : (
              <span key={index}>
                <div className={`image-wrapper hover:text-white transition-all active:opacity-50 duration-200 bg-orange0 ease-in-out ${(socialName || hoverSocial) ? "text-white !bg-orange" : "text-white "}`} onMouseLeave={() => handleHover(social.name.toLowerCase())} onMouseEnter={() => handleHover(social.name.toLowerCase())} onClick={() => handleClick(social.name.toLowerCase())} >
                  <social.image />
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
