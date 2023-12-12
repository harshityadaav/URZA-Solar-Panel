import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../../Styles/PagesStyle/Rescourses.css";
import first from "../../Assets/Images/Rectangle 167.svg";
import second from "../../Assets/Images/Rectangle 162.svg";
import third from "../../Assets/Images/Rectangle 163.svg";
import fourth from "../../Assets/Images/Rectangle 164.svg";
import fifth from "../../Assets/Images/Rectangle 165.svg";
import arrow from "../../Assets/Images/Group 1.svg";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const GallerySection = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current && observer) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const images = [first, second, third, fourth, fifth];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 3 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 2 },
  };

  const imageDelays = [0, 0.2, 0.4, 0.6, 0.8];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div ref={sectionRef}>
      <div className="gallery-main">
        <Fade direction="left">
          <h1 className="sideHeading">GALLERY</h1>
        </Fade>

        <div className="flex-container">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={image}
              initial="center"
              animate={isVisible ? positions[positionIndexes[index]] : "center"}
              variants={imageVariants}
              transition={{ duration: 0.5, delay: imageDelays[index] }}
              className="image"
            />
          ))}
        </div>
        <div className="photos">
          <Link to="/gallery" onClick={scrollToTop}>
            <button className="ViewMore ">
              View More
              <img src={arrow} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
