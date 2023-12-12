import React, { useState, useEffect } from "react";
import logo1 from "../../Assets/Logos/bfcef60d4dba7885c4b62e598532d3f.webp";
import logo2 from "../../Assets/Logos/Bosch.png";
import logo3 from "../../Assets/Logos/Invergy-Logo.png";
import logo4 from "../../Assets/Logos/logo (1).png";
import logo5 from "../../Assets/Logos/logo (2).png";
import logo6 from "../../Assets/Logos/logo_25_pc.png";
import logo7 from "../../Assets/Logos/logo.png";
import logo8 from "../../Assets/Logos/LuminousLogoBlue.png";
import logo9 from "../../Assets/Logos/tata-logo.png";
import logo10 from "../../Assets/Logos/Waaree-logo_vufgvr.svg";
import logo11 from "../../Assets/Logos/wilologo.png";
import logo12 from "../../Assets/Logos/logo.svg";
import { Fade, Zoom } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const OurPartners = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides based on screen width
      if (window.innerWidth < 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    // Set initial number of slides
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    arrows: false,
    speed: 4000,
    autoplaySpeed: 0,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    initialSlide: 1,
    beforeChange: (current, next) => setActiveIndex(next),
    afterChange: (current) => {
      if (current === 0) {
        setActiveIndex(1);
      } else if (current === 6) {
        setActiveIndex(5);
      }
    },
  };

  const rtlSettings = {
    ...settings,
    rtl: true,
  };

  return (
    <div className="our-partners">
      <h1 className="partners-heading">
        <Fade direction="down">
          <span style={{ color: "var(--primary)" }}>Our</span> &nbsp;
          <span style={{ color: "var(--secondary)" }}>Partners</span>
        </Fade>
      </h1>
      <div className="logos">
      <div className="logos1">
        <Slider {...settings}>
          <Zoom>
            <img src={logo1} alt="" className="logo" />
          </Zoom>
          <Zoom>
            <img src={logo2} alt="" className="logo2" />
          </Zoom>
          <Zoom>
            <img src={logo3} alt="" className="logo" />
          </Zoom>
          <Zoom>
            <img src={logo4} alt="" className="logo4" />
          </Zoom>
          <Zoom>
            <img src={logo5} alt="" className="logo logo5" />
          </Zoom>
          <Zoom>
            <img src={logo6} alt="" className="logo6" />
          </Zoom>
        </Slider>
        </div>
        <div className="logos2">
        <Slider {...rtlSettings}>
          <Zoom>
            <img src={logo7} alt="" className="logo logo7" />
          </Zoom>
          <Zoom>
            <img src={logo8} alt="" className="logo8" />
          </Zoom>
          <Zoom>
            <img src={logo9} alt="" className="logo9" />
          </Zoom>
          <Zoom>
            <img src={logo10} alt="" className="logo10" />
          </Zoom>
          <Zoom>
            <img src={logo11} alt="" className="logo11" />
          </Zoom>
          <Zoom>
            <img src={logo12} alt="" className="logo" />
          </Zoom>
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
