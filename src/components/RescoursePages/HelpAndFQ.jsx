import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import arrow from "../../Assets/Images/Group 1.svg";

import "../../Styles/PagesStyle/Rescourses.css";
import first from "../../Assets/Images/Rectangle 117.svg";
const HelpAndFQ = () => {
  return (
    <div className="Help-main">
      <Zoom>
        <div className="help-photo">
          <img src={first} alt="firstphoto"/>
        </div>
      </Zoom>
      <div className="help-content">
        <Fade direction="up">
          <h1>
            <span className="yellow-text">HELP &</span> F&Qs
          </h1>
        </Fade>
        <Fade direction="down" delay={500}>
          <div className=" help-details">
            <span className="question">
              How does Urja's solar power plant work?
            </span>
            <p>
              Urja's solar power plants harness sunlight through photovoltaic
              panels. These panels convert sunlight into electricity, which is
              then fed into the grid or stored for later use.
            </p>
          </div>
          <div className="help-details">
            <span className="question">
              What sets Urja's solar plants apart from others in the market?
            </span>
            <p>
              Urza's solar plants stand out for their cutting-edge technology,
              efficient energy conversion, and commitment to sustainable
              practices. We prioritize innovation and environmental
              responsibility.
            </p>
          </div>
          <div className="help-details">
            <span className="question">
              Why should I choose solar power for my energy needs?
            </span>
            <p>
              Solar power is a clean, renewable energy source that reduces your
              carbon footprint. Choosing Urja means embracing a sustainable
              solution for your energy requirements, contributing to a greener
              planet.
            </p>
          </div>
        </Fade>
        <Fade direction="right">
          <button className="ViewMorebtn">View More<img src={arrow} alt="" /></button>
        </Fade>
      </div>
    </div>
  );
};

export default HelpAndFQ;
