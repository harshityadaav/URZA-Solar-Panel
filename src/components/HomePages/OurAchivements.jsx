import arrow from "../../Assets/Images/Group 1.svg";
import { Fade, Zoom } from "react-awesome-reveal";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurAchivements = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrow:false,
    speed: 4000,
    autoplaySpeed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    vertical: true, // Set vertical option to true
    cssEase: "linear",
  };


  return (
    <div className="our-achivements">
      <div className="section1">
        <div className="subsection1">
          <Fade direction="down" delay={10}>
            <h1 className="element">
              <span
                style={{
                  color: "var(--primary)",
                  borderBottom: "2px solid var(--secondary)",
                }}
              >
                OUR&nbsp;
              </span>
              <span style={{ color: "var(--secondary)" }}>ACHIEVEMENTS</span>
            </h1>
          </Fade>
          <Fade direction="left" delay={20}>
            <p className="element">
              As pioneers in sustainable energy, our achievements define us.
              We've successfully implemented state-of-the-art solar power
              plants, illuminating the path to a greener future. Our
              cutting-edge solar products set industry standards for efficiency
              and durability. With a dedicated team and unwavering commitment,
              we've exceeded goals, solidifying our leadership in renewable
              energy. Our success story is one of innovation, impact, and a
              commitment to a cleaner, brighter tomorrow.
            </p>
          </Fade>
          <Fade direction="up" delay={30}>
            <button className="Btn element">
              View&nbsp;Page <img src={arrow} alt="" />
            </button>
          </Fade>
        </div>
      </div>

      <div className="section2">

        <Slider {...settings}>


          <div className="subsection">
            <div className="circle-container">
              <div className="circle">
                <h1>2015</h1>
              </div>
            </div>

            <p>Incorporated With Solar Water Heater.</p>
          </div>

          <div className="subsection">
            <div className="circle-container">
              <div className="circle">
                <h1>2017</h1>
              </div>
            </div>
            <p>Added Heat Pumps In Thermo-Technology Division.</p>
          </div>

          <div className="subsection">
            <div className="circle-container">
              <div className="circle">
                <h1>2018</h1>
              </div>
            </div>
            <p>
              Entered Photovoltaic Business with Different
              Commercial/Residential & Govt. Projects.
            </p>
          </div>

          <div className="subsection">
            <div className="circle-container">
              <div className="circle">
                <h1>2021</h1>
              </div>
            </div>
            <p>Started Solar Pumping Schemes With Auto-Tracking Structure.</p>
          </div>

          <div className="subsection">
            <div className="circle-container">
              <div className="circle">
                <h1>2022</h1>
              </div>
            </div>
            <p>Entered In Pumping Solution With Groundtop With Wider Range Of Solutions.</p>
          </div>

          <div className="subsection">
            <div className="circle-container">
              <div className="circle">
                <h1>2023</h1>
              </div>
            </div>
            <p>Become One-Stop Solution Destination In Field Of Renewable Energy & Energy Efficient.</p>
          </div>

          <div className="subsection">
            <div className="circle-container">
              <div className="circle">
                <h1>2019</h1>
              </div>
            </div>
            <p>Introduced Green Home Concept With 100% Energy Independent Buildings & Homes.</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurAchivements;
