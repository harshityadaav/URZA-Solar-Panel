import React from "react";
import "../Styles/PagesStyle/GalleryPage.css";
import seventh from "../Assets/Images/Rectangle 145.svg";
import fifth from "../Assets/Images/Rectangle 138.svg";
import second from "../Assets/Images/Rectangle 139.svg";
import first from "../Assets/Images/Rectangle 142.svg";
import fourth from "../Assets/Images/Rectangle 141.svg";
import sixth from "../Assets/Images/Rectangle 148.svg";
import third from "../Assets/Images/Rectangle 137.svg";
import eight from "../Assets/Images/Rectangle 146.svg";
import ninth from "../Assets/Images/Rectangle 150.svg";
import { Fade, Zoom } from "react-awesome-reveal";

const GalleryPage = () => {
  return (
    <div>
      <section>
        <div className="gallery-hero">
          <Zoom>
            <h1>Gallery</h1>
          </Zoom>
        </div>
      </section>
      <section>
        <div className="gallery-con">
          <div className="gallery-photos">
            <Fade delay={100}>
              <img src={first} alt="Image 1" />
            </Fade>
            <Fade delay={200}>
              <img src={second} alt="Image 2" />
            </Fade>
            <Fade delay={300}>
              <img src={third} alt="Image 3" />
            </Fade>
            <Fade delay={400}>
              <img src={fourth} alt="Image 4" />
            </Fade>

            <Fade delay={500}>
              <img src={seventh} alt="Image 7" />
            </Fade>
            <Fade delay={600}>
              <img src={ninth} alt="Image 9" />
            </Fade>
            <Fade delay={700}>
              <img src={fifth} alt="Image 5" />
            </Fade>
            <Fade delay={800}>
              <img src={sixth} alt="Image 6" />
            </Fade>

            <Fade delay={900}>
              <img src={eight} alt="Image 8" />
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
