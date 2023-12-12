import React from "react";
import "../../Styles/SharedStyle/WhyUs.css";
import { Fade } from "react-awesome-reveal";

const WhyUs = ({ imageSrc, title, description }) => {
  return (
    <div className="whyusbox">
      <Fade direction="left">
        <img src={imageSrc} alt="Why Us Image" />
      </Fade>
      <div>
        <Fade direction="down">
          <h1>{title}</h1>
          <p>{description}</p>
        </Fade>
      </div>
    </div>
  );
};

export default WhyUs;
