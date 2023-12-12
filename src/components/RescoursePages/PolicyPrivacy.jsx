import React from "react";
import {Fade} from "react-awesome-reveal";
import "../../Styles/PagesStyle/Rescourses.css";
import first from "../../Assets/Images/Rectangle 112.svg";
import second from "../../Assets/Images/Rectangle 113.svg";
import third from "../../Assets/Images/Rectangle 114.svg";
import fourth from "../../Assets/Images/Rectangle 115.svg";
import fifth from "../../Assets/Images/Rectangle 116.svg";
import firstM from "../../Assets/Images/Rectangle 112.png";
import secondM from "../../Assets/Images/Rectangle 113.png";
import thirdM from "../../Assets/Images/Rectangle 115.png";
import fourthM from "../../Assets/Images/Rectangle 114.png";
import arrow from "../../Assets/Images/Group 1.svg";
import { useMediaQuery } from "react-responsive";
const PolicyPrivacy = () => {
  const isMobile = useMediaQuery({ maxWidth: 1020 });
  const ispc = useMediaQuery({minWidth:1021});
  return (
    
      <div className="policy-main">
        <div className="policy-content">
          <Fade direction="left" >
            <h1>
              PRIVACY <span className="yellow-text">POLICY</span>
            </h1>
          </Fade>
          <Fade direction="left" >
            <p>
              At Urza, we are committed to safeguarding the privacy of our
              users. This Privacy Policy outlines how we collect, use, and
              protect your personal information in relation to our solar plants
              services.
            </p>
            <p>
              Information Collection: We may collect personal information such
              as your name, contact details, and location for the purpose of
              providing and improving our solar plant services.
            </p>
            <p>
              Data Usage: Your information is used to fulfill your solar energy
              needs and enhance our services. We do not sell, trade, or share
              your personal information with third parties without your consent.
            </p>
            <p>
              Policy Updates: This Privacy Policy may be updated to reflect
              changes in our practices. Users will be notified of any
              significant changes.
            </p>
            <p>
              By using Urza's solar plant services, you agree to the terms
              outlined in this Privacy Policy.
            </p>
          </Fade>
          <Fade direction="left" >
            <button className="ReadMore">Read More<img src={arrow} alt="" /></button>
          </Fade>
        </div>
        {ispc &&
        <div className="policy-photo">
          <Fade direction="down">
            <img src={first} alt="Image1" className="image1" />
            <img src={second} alt="Image2" className="image2" style={{height:'200px'}}/>
            <img src={third} alt="Image3" className="image3" />
          </Fade>
          <Fade direction="down" >
          <img src={fourth} alt="Image4" className="image4" />
            <img src={fifth} alt="Image5" className="image5" />
          </Fade>
        </div>}
        {isMobile&&
          <div className="policy-photo">
          <img src={firstM} alt="Image1" className="image1" />
          <img src={secondM} alt="Image2" className="image2" />
          <img src={thirdM} alt="Image3" className="image3" />
          <img src={fourthM} alt="Image4" className="image4" />
          </div>
        }
      </div>
   
  );
};

export default PolicyPrivacy;