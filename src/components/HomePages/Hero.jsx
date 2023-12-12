import React, { useState, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Fade, Zoom } from "react-awesome-reveal";
import call from "../../Assets/LotteiFiles/call.json";
import mail from "../../Assets/LotteiFiles/Mail.json";
import location from "../../Assets/LotteiFiles/Location.json";
import thermo from "../../Assets/LotteiFiles/Solar Thermal technology.json";
import pump from "../../Assets/LotteiFiles/water pump.json";
import Photovoltaic from "../../Assets/LotteiFiles/Solar Photovoltaic.json";
import SAE from "../../Assets/LotteiFiles/STP & ETP.json";
import arrow from "../../Assets/Images/Group 1.svg";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const lottieRefs = [useRef(), useRef(), useRef(), useRef()];
  const handleMouseEnter = (index) => lottieRefs[index].current?.play();
  const handleMouseLeave = (index) => lottieRefs[index].current?.stop();
  const isMobile = useMediaQuery({ maxWidth: 1020 });
  const ispc = useMediaQuery({minWidth:1021});

  const options = [
    "Solar Photovoltaic",
    "Pumping Solutions",
    "STP & ETP",
    "Solar Thermotechnology",
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const [hoveredIconIndex, setHoveredIconIndex] = useState();
  const contactDetails = [
    { textType: "1234567890", icon: call, top: "45%" }, // Call
    { textType: "abc@gmail.com", icon: mail, top: "50%" }, // mail
    { textType: "Dehradun, India", icon: location, top: "55%" }, // location
  ];

  const handleMouseEnterAddress = (i) => {
    setHoveredIconIndex(i)
  }
  const optionContent = {
    "Solar Photovoltaic": {
      heading: "Solar Photovoltaic",
      paragraph:
        "Unlock clean, sustainable energy with solar photovoltaic technology. Harnessing sunlight to generate electricity, our cutting-edge solar panels bring eco-friendly power to your fingertips, reducing your carbon footprint and powering a brighter, greener future.",
    },
    "Pumping Solutions": {
      heading: "Pumping Solutions",
      paragraph:
        "Experience efficient and eco-friendly water solutions with our solar-powered pumping systems. Harness the power of the sun to drive sustainable water pumping, ensuring reliability and cost-effectiveness for a greener tomorrow.",
    },
    "STP & ETP": {
      heading: "STP & ETP",
      paragraph:
        "Revolutionize wastewater management with our solar-powered sewage treatment solutions. Harnessing the sun's energy, we offer sustainable and efficient systems, ensuring eco-friendly purification for a cleaner, greener future.",
    },
    "Solar Thermotechnology": {
      heading: "Solar Thermotechnology",
      paragraph:
        "Experience efficient and eco-friendly energy solutions with our advanced solar thermotechnology. Harnessing the power of the sun, we provide sustainable heating and cooling solutions for a greener, more sustainable future.",
    },
  };
  function getOptionLottieFile(option) {
    switch (option) {
      case "Solar Photovoltaic":
        return Photovoltaic;
      case "Pumping Solutions":
        return pump;
      case "STP & ETP":
        return SAE;
      case "Solar Thermotechnology":
        return thermo;
      default:
        return null;
    }
  }

  const { heading, paragraph } = optionContent[selectedOption];

  return (
    <div className="hero">
      <p key={heading} className="heading">
        <Zoom>{heading}</Zoom>
      </p>
      <div className="box">
        <Zoom triggerOnce={false}>
          <h1>
            <span style={{ color: "var(--secondary)" }}>
              HARVESTING 
              SUNLIGHT
            </span>
            &nbsp;FROM DECADES TO POWER TOMORROWS BRILLIANCE
          </h1>
        </Zoom>
        {ispc && (
          <Fade direction="down" delay={20}>
            <button className="Btn">
              View&nbsp;Page <img src={arrow} alt="" />
            </button>
          </Fade>
        )}
        <Zoom>
          <p key={paragraph}>
            <Zoom>{paragraph}</Zoom>
          </p>
        </Zoom>
        <Fade delay={40} direction="down">
          <p>
            <b>
              URZA offers cutting-edge solutions for renewable energy and energy
              efficiency, promoting a sustainable future through innovative
              technology and eco-friendly practices.
            </b>
          </p>
        </Fade>
        {isMobile && (
          <Fade direction="down" delay={20}>
            <button className="Btn">
              View&nbsp;Page <img src={arrow} alt="" />
            </button>
          </Fade>
        )}
      </div>
      
      <div className="icon-options">
        {options.map((option, index) => (
          <Fade key={option} delay={20 * index} direction="down">
            <div
              className={`icon-option ${selectedOption === option ? "selected" : ""
                }`}
              onClick={() => setSelectedOption(option)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <span>
                <Player
                  autoplay={false}
                  src={getOptionLottieFile(option)}
                  style={{ height: "3rem" }}
                  ref={lottieRefs[index]}
                  loop
                ></Player>
              </span>
              <span
                style={{
                  paddingLeft: "1%",
                  color: selectedOption === option ? "yellow" : "white",
                }}
              >
                {option}
              </span>
            </div>
          </Fade>
        ))}
      </div>
      
      <div className="side-icons">
        {contactDetails.map((item, index) => (
          <div
            key={index}
            className={hoveredIconIndex === index ? "container-address-hover" : "container-address"}
            onMouseEnter={() => handleMouseEnterAddress(index)}
            onMouseLeave={() => handleMouseEnterAddress(null)}>
            <Zoom key={index} delay={item.delay}>
              <div
                style={{ top: item.top }}
                className={hoveredIconIndex === index ? "icon icon-hover" : "icon"}
              >

                <Player
                  autoplay
                  hover
                  className="iconClass"
                  src={item.icon}
                  style={{ height: "3rem"}}
                  
                ></Player>
                {hoveredIconIndex === index ?
                  <p className="address-text">{item.textType}</p>
                  : null}

              </div>
            </Zoom>
          </div>
        ))}



      </div>
    </div>
  );
};

export default Hero;