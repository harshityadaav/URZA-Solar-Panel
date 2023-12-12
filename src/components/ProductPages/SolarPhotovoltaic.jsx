import React from "react";
import photo1 from "../../Assets/Images/solar-photo1.svg";
import photo2 from "../../Assets/Images/solar-photo2.svg";
import photo3 from "../../Assets/Images/solar-photo3.svg";
import arrow from "../../Assets/Images/Group 1.svg";
import { useNavigate } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";
const SolarPhotovoltaic = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 1020 }); // Adjust the max width as needed
  const ispc = useMediaQuery({ minWidth: 1021 });

  return (
    <div className="solar-photo">
      <div className="solar-photo-content">
        <h1>
          <Fade direction="down">
            <span style={{ color: "var(--primary)" }}>Solar&nbsp;</span>
            <span style={{ color: "var(--secondary)" }}>Photovoltaic</span>
          </Fade>
        </h1>
        <p>
          <Fade direction="left">
            With an unwavering commitment to sustainable energy solutions, solar
            photovoltaic (PV) technology has emerged as a beacon of
            environmental responsibility. Harnessing the power of sunlight, PV
            systems convert solar energy into electricity, offering a clean and
            renewable alternative to traditional sources. The simplicity of this
            technology, where sunlight activates semiconductor materials to
            generate an electric current, underscores its elegance and
            efficiency.
          </Fade>
        </p>
        {ispc && (
          <Fade direction="up">
            <button
              className="Btn"
              onClick={() => navigate("/solarphotovoltaic")}
            >
              View&nbsp;More
              <img src={arrow} alt="" />
            </button>
          </Fade>
        )}
      </div>
      <div className="photo-photo">
        <Fade direction="left">
          <img className="photo1" src={photo1} alt="" />
        </Fade>
        <Fade direction="left">
          <img className="photo2" src={photo2} alt="" />
        </Fade>
        <Fade direction="left">
          <img className="photo3" src={photo3} alt="" />
        </Fade>
      </div>
      { isMobile &&<Zoom ><button className="mobile-Btn" onClick={() => navigate("/solarphotovoltaic")}>View&nbsp;More<img src={arrow} alt="" /></button></Zoom> }
    </div>
  );
};

export default SolarPhotovoltaic;
