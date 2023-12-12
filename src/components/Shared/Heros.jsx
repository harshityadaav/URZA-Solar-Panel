import React from "react";
import "../../Styles/SharedStyle/Heros.css";
import { Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const Heros = ({ title }) => {
  const navigate = useNavigate();
  const titleStyle = {
    width: title === "Solar Photovoltaic" ? "70rem" : " ",
  };

  return (
    <div className="herossection">
      <Zoom>
        <h1 style={titleStyle}>{title}</h1>
      </Zoom>
      <div className="Mbuttton">
      <button className="requestbtn" onClick={() => navigate("/contact")}>
        <Zoom>Request a quote</Zoom>
      </button>
      <button className="moreaboutbtn" onClick={() => navigate("/about")}>
        <Zoom>More about us</Zoom>
      </button>
      </div>
    </div>
  );
};

export default Heros;
