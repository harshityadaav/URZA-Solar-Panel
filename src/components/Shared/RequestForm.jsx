import React from "react";
import "../../Styles/SharedStyle/RequestForm.css";
import evimage from "../../Assets/Images/Layer_1.svg";
import psimage from "../../Assets/Images/Layer_1 (1).svg";
import pmimage from "../../Assets/Images/Layer_1 (2).svg";
import { Fade, Flip } from "react-awesome-reveal";
const RequestForm = () => {
  return (
    <div className="requestform">
      <div className="requestform-text">
        <Fade direction="left">
          <h2 className="headingtext">
            <span>Save Money, </span>
            <span className="yellow-text">Save The Environment!</span>
          </h2>
          <h2>
            <span className="yellow-text">Providing Value To Our Clients</span>{" "}
            Through Ongoing Product & Innovation.
          </h2>
          <p className="small">
            Our Solar business now provides the preferred channel to market for
            some of the world’s leading PV manufacturers and our solar
            professionals work jointly with partners on enhancing product
            features, lowering lead times and improving cash flow.
          </p>
        </Fade>
        <div className="iconphoto">
          <Flip>
            <div className="icon-photo">
              <img src={evimage} alt="" />
              <p>Environmental Sensitivity</p>
            </div>
            <div className="icon-photo">
              <img src={psimage} alt="" />
              <p>Personalized Solutions</p>
            </div>
            <div className="icon-photo">
              <img src={pmimage} alt="" />
              <p>Performance Measure</p>
            </div>
          </Flip>
        </div>
      </div>

      <div className="requestform-quote">
        <Fade direction="down">
          <h1>Request A Quote</h1>
        </Fade>
        <div className="quote">
          <Fade direction="down">
            <form>
              <div>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Address" />
              </div>
              <select>
                <option value="Solar Photovoltaic">Solar Photovoltaic</option>
                <option value="Solar Photovoltaic">Solar Thermotechnology</option>
                <option value="Solar Photovoltaic">Pumping Solutions</option>
                <option value="Solar Photovoltaic">STP And ETP</option>
                <option value="Solar Photovoltaic">Others</option>
              </select>
              <span className="optiontext">Preferred Contact Method</span>
              <span id="option">
                <input type="radio" id="All" name="contactMethod" />
                <label htmlFor="All">All</label>

                <input type="radio" id="Email" name="contactMethod" />
                <label htmlFor="Email">Email</label>

                <input type="radio" id="Phone" name="contactMethod" />
                <label htmlFor="Phone">Phone</label>
              </span>
            </form>
          </Fade>
          <Fade direction="down">
            <button id="submit">Submit Request</button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
