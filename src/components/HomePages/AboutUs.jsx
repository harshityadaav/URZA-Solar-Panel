import { useNavigate } from "react-router-dom";
import urza from "../../Assets/Images/urza.svg";
import arrow from "../../Assets/Images/Group 1.svg";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="about-us">
      <div className="about">
        <Fade direction="left"delay={10}>
          <h1>
            {" "}
            <span style={{ color: "var(--primary)" }}>ABOUT</span>{" "}
            <span style={{ color: "var(--secondary)" }}>US</span>
          </h1>
        </Fade>
        <Fade direction="down" delay={10}>
          <p>
          At Urza, we are the driving force behind a sustainable future, specializing in every aspect of renewable solutions, from meticulous manufacturing to seamless implementation. Founded by visionary entrepreneur Ashwani K. Chaudhary, our commitment transcends business; it's a dedication to a greener tomorrow. With innovation at our core, Urza pioneers the renewable energy landscape, ensuring top-tier quality and eco-friendly practices from inception to operation. Join us in reshaping the energy narrative.
          </p>
        </Fade>
        <Fade direction="left" delay={10}>
          <button onClick={() => navigate("/about")} className="Btn">
            View Page
            <img src={arrow} alt="" />
          </button>{" "}
        </Fade>
      </div>
      <div className="about-logo">
        <Fade direction="down" delay={10}>
          <img src={urza} alt="" />
        </Fade>
        <Fade direction="up" delay={10}>
          <h1 className="logo-heading">
            <span style={{ color: "var(--secondary)" }}>
              For Sustainable
            </span>
            <span style={{ color: "var(--primary)" }}>Tommorow</span>
          </h1>
        </Fade>
      </div>
    </div>
  );
};

export default AboutUs;
