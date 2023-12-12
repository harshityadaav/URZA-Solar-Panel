import React from "react";
import { useNavigate } from "react-router-dom";
import solution1 from "../../Assets/Images/pumping-solution1.svg";
import solution2 from "../../Assets/Images/pumping-solution2.svg";
import solution3 from "../../Assets/Images/pumping-solution3.svg";
import arrow from "../../Assets/Images/Group 1.svg";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";
const PumpingSolutions = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 1020 }); // Adjust the max width as needed
  const ispc = useMediaQuery({minWidth:1021});

  return (
    <div className="pumping-solution">
      <h1>
        <Fade direction="down" >
          <span style={{ color: "var(--primary)" }}>Pumping&nbsp;</span>
          <span style={{ color: "var(--secondary)" }}>Solutions</span>
        </Fade>
      </h1>
      {ispc &&
      <div className="pumping-photo">
        <Fade direction="down" >
          <img src={solution1} alt="" />
        </Fade>
        <Fade direction="up" >
          <img src={solution2} alt="" />
        </Fade>
        <Fade direction="down">
          <img src={solution3} alt="" />
        </Fade>
      </div>
      }
      {isMobile &&
        <div className="pumping-photo">
          <img src={solution1} alt="" />
          <img src={solution2} alt="" />
          <img src={solution3} alt="" />
      </div>
      }
      <p>
      <Fade direction="down" >
        Pumping Solutions at its core is about harnessing the transformative
        power of solar energy to revolutionize water systems. In a world
        grappling with environmental challenges, our solar-powered pumping
        solutions offer a sustainable alternative that goes beyond conventional
        methods. We specialize in seamlessly integrating cutting-edge technology
        with solar power, ensuring efficient and eco-friendly water pumping
        solutions for various applications.
        </Fade>
      </p>
      <Fade direction="up" >
        <button  onClick={() => navigate("/pumpingSolutions")}>View&nbsp;More <img src={arrow} alt="" /></button> 
      </Fade>
    </div>
  );
};

export default PumpingSolutions;
