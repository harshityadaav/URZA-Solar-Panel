import team1 from "../../Assets/Images/Ellipse 12.svg";
import team2 from "../../Assets/Images/Ellipse 13.svg";
import team3 from "../../Assets/Images/Ellipse 14.svg";
import { Fade, Zoom } from "react-awesome-reveal";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from "react";

const OurTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: true,
    arrows: false,
    speed: 6000,
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    initialSlide: 1,
    beforeChange: (current, next) => setActiveIndex(next),
  };

  const settingsMobile = {
    ...settings,
    slidesToShow: 1,
  };

  useEffect(() => {
    const handleResize = () => {
      // Force re-render on window resize
      window.dispatchEvent(new Event("resize"));
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideStyle = {
    transform: activeIndex === 1 ? 'scale(1.5)' : 'scale(1)',
  };

  return (
    <div className="our-team">
      <h1 className="team-heading">
        <Fade direction="down">
          <span style={{ color: "var(--primary)" }}>Our&nbsp;</span> &nbsp;
          <span style={{ color: "var(--secondary)" }}>Team</span>
        </Fade>
      </h1>
      <div className="team-images">
        <Slider {...(window.innerWidth <= 768 ? settingsMobile : settings)}>
          <div className="slide-container" style={slideStyle}>
            <Zoom><div className="image-container"><img src={team1} alt="" /></div></Zoom>
          </div>
          <div className="slide-container" style={slideStyle}>
            <Zoom><div className="image-container"><img src={team2} alt="" /></div></Zoom>
          </div>
          <div className="slide-container" style={slideStyle}>
            <Zoom><div className="image-container"><img src={team3} alt="" /></div></Zoom>
          </div>
          <div className="slide-container" style={slideStyle}>
            <Zoom><div className="image-container"><img src={team1} alt="" /></div></Zoom>
          </div>
          <div className="slide-container" style={slideStyle}>
            <Zoom><div className="image-container"><img src={team2} alt="" /></div></Zoom>
          </div>
        </Slider>
      </div>
      <div className="para">
        <p>
          <Fade direction="up">
            Team Urza, a pioneer in renewable solutions, comprises dedicated professionals committed to seamless installations. Their collective expertise ensures eco-friendly energy solutions for the betterment of the world by harnessing the power of the sun for a sustainable future.
          </Fade>
        </p>
      </div>
    </div>
  );
};

export default OurTeam;
