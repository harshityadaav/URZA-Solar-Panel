import tero from "../../Assets/Images/Solar-tero.png";
import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import arrow from "../../Assets/Images/Group 1.svg";
import { useMediaQuery } from "react-responsive";

const SolarTermotechnology = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 1020 }); 
  const ispc = useMediaQuery({minWidth:1021});
   return (
    <div className="solar-tero" >
      <div className="tero-photo">
        <Zoom>
        <img  src={tero} alt="" />
        </Zoom>
      </div>
      <div className="tero-content">
        <h1>
        <Fade direction="down">
          <span style={{ color: "var(--primary)" }}>Solar</span> 
          <span style={{ color: "var(--secondary)" }}>Thermotechnology</span>
          </Fade>
        </h1>
        <p>
        <Fade direction="up"  >
          With an unwavering commitment to sustainable energy solutions, solar
          photovoltaic (PV) technology has emerged as a beacon of environmental
          responsibility. Harnessing the power of sunlight, PV systems convert
          solar energy into electricity, offering a clean and renewable
          alternative to traditional sources. The simplicity of this technology,
          where sunlight activates semiconductor materials to generate an
          electric current, underscores its elegance and efficiency
          </Fade>
        </p>
        <Fade direction="up">
        {ispc &&
        <button className="Btn" onClick={() => navigate("/solarthermotechnology")}>View&nbsp;More <img src={arrow} alt="" /></button> }
        {isMobile && 
        <button className="mobile-Btn1" onClick={() => navigate("/solarthermotechnology")}>View&nbsp;More <img src={arrow} alt="" /></button> }
        </Fade>
      </div>
    </div>
  );
};

export default SolarTermotechnology;
