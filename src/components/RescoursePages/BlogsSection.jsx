import React from "react";
import { Fade } from "react-awesome-reveal";
import "../../Styles/PagesStyle/Rescourses.css";
import first from "../../Assets/Images/Rectangle 108.svg";
import second from "../../Assets/Images/Rectangle 110.svg";
import third from "../../Assets/Images/Rectangle 109.svg";
import next from "../../Assets/Images/material-symbols_arrow-right.svg";
import back from "../../Assets/Images/material-symbols_arrow-back.svg";
import Carousel from "react-slick"; // Import a carousel/slider library
import { useMediaQuery } from "react-responsive";

const BlogsSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 1020 });
  const ispc = useMediaQuery({minWidth:1021});
  // Settings for the carousel/slider
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Blog-main">
      <Fade direction="down">
        <h1 className="sideHeadingB">BLOGS</h1>
      </Fade>
       {ispc &&
      <div className="blogPhoto">
        <Fade delay={500}>
          <div className="blogItem">
            <img src={first} alt="Image 1" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
        </Fade>
        <Fade delay={700}>
          <div className="blogItem">
            <img src={second} alt="Image 2" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
        </Fade>
        <Fade delay={900}>
          <div className="blogItem">
            <img src={third} alt="Image 3" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
        </Fade>
        <Fade delay={1100}>
          <div className="blogItem">
            <img src={third} alt="Image 4" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
        </Fade>
        <Fade delay={1300}>
          <div className="blogItem">
            <img src={third} alt="Image 5" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
        </Fade>
        <Fade delay={1500}>
          <div className="blogItem">
            <img src={third} alt="Image 6" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
        </Fade>
      </div>
       }
       {isMobile &&
      <div className="mobile-view">
          {/* Use a carousel/slider for mobile view */}
          <Carousel {...carouselSettings}>
          <div className="blogItem">
            <img src={first} alt="Image 1" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
          <div className="blogItem">
            <img src={second} alt="Image 2" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
          <div className="blogItem">
            <img src={third} alt="Image 3" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
          <div className="blogItem">
            <img src={third} alt="Image 4" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
          <div className="blogItem">
            <img src={third} alt="Image 5" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
          <div className="blogItem">
            <img src={third} alt="Image 6" />
            <h2>
              Lorem <span>Ipsum</span>
            </h2>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
          </Carousel>
          </div>
       }
    </div>
  );
};

export default BlogsSection;
