import photo1 from "../../Assets/Images/Ellipse 14.svg";
import photo2 from "../../Assets/Images/Ellipse 12.svg";
import arrow from "../../Assets/Images/Group 1.svg";
import { Fade, Zoom } from "react-awesome-reveal";
const OurMissionAndVision = () => {
  return (
    <div className="our">

      <div className="our-vision">
        <Zoom delay={10}   >
          <div className="photo" >
            <img src={photo1} alt="" />
          </div>
        </Zoom>
        <Fade direction="down" delay={20}>
          <h1>
            <span style={{ color: "var(--primary)" }}>OUR</span>{" "}
            <span style={{ color: "var(--secondary)" }}>MISSON</span>
          </h1>
        </Fade>
        <Fade direction="down" delay={30}>
          <p>
            At our, we're on a mission to democratize solar energy. From individuals seeking energy independence to eco-conscious businesses, we provide innovative solar solutions to create a greener, more affordable, and energy-efficient world. Join us in unlocking solar energy's potential for a brighter tomorrow.
          </p>
        </Fade>
        <Fade direction="down" delay={40}>
          <button className="Btn">
            View&nbsp;Page <img src={arrow} alt="" />
          </button>
        </Fade>
        <div class="overlay" />
      </div>

      <div className="our-mission">
        <Zoom delay={50}  >
          <div className="photo">
            <img src={photo2} alt="" />
          </div>
        </Zoom>

        <Fade direction="down" delay={10}>
          <h1>
            <span style={{ color: "var(--primary)" }}>OUR</span>{" "}
            <span style={{ color: "var(--secondary)" }}>VISION</span>
          </h1>
        </Fade>
        <Fade direction="down" delay={20}>
          <p>
            we envision a sustainable and accessible future powered by the sun. We empower individuals, businesses, and communities with innovative solar solutions, revolutionizing energy harnessing for a greener world. Our unwavering commitment to affordability, quality, and eco-stewardship leads us in creating a more energy-efficient planet. Join our journey to unlock solar energy's potential for a brighter, eco-friendly tomorrow.
          </p>
        </Fade>
        <Fade direction="down" delay={30}>
          <button className="Btn">
            View&nbsp;Page <img src={arrow} alt="" />
          </button>
        </Fade>
      </div>
      
    </div>
  );
};

export default OurMissionAndVision;
