import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/LayoutStyle/footer.css";
import { Player } from "@lottiefiles/react-lottie-player";
import call from "../../Assets/LotteiFiles/call.json";
import mail from "../../Assets/LotteiFiles/Mail.json";
import location from "../../Assets/LotteiFiles/Location.json";
import vector from "../../Assets/Images/Vector.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const navigate = useNavigate();

  // State variables for accordion dropdowns
  const [mainLinksOpen, setMainLinksOpen] = useState(false);
  const [productLinksOpen, setProductLinksOpen] = useState(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case "mainLinks":
        setMainLinksOpen(!mainLinksOpen);
        break;
      case "productLinks":
        setProductLinksOpen(!productLinksOpen);
        break;
      case "quickLinks":
        setQuickLinksOpen(!quickLinksOpen);
        break;
      default:
        break;
    }
  };
  // Function to check if a link is active
  const isLinkActive = (link) => link === activeLink;
  return (
    <div className="footer">
      <div className="top">
        <div className="top1">
          <div>
            <Player
              autoplay
              hover
              src={call}
              style={{
                height: "3.5rem",
                width: "3.5rem",
                backgroundColor: "var(--secondary)",
                marginBottom: "2rem",
                borderRadius: "60%",
                padding: "12px",
              }}
            ></Player>
            <p>+91-8126475070</p>
          </div>
          <div>
            <Player
              autoplay
              hover
              src={mail}
              style={{
                height: "3.5rem",
                width: "3.5rem",
                backgroundColor: "var(--secondary)",
                marginBottom: "2rem",
                borderRadius: "60%",
                padding: "12px",
              }}
            ></Player>
            <p>urzasol@gmail.com</p>
          </div>
          <div>
            <Player
              autoplay
              hover
              src={location}
              style={{
                height: "3.5rem",
                width: "3.5rem",
                backgroundColor: "var(--secondary)",
                marginBottom: "2rem",
                borderRadius: "60%",
                padding: "5px",
              }}
            ></Player>
            <p>Dehradun</p>
          </div>
        </div>
        <div className="underline"></div>
        <div className="top2">
          <div className={`main-links ${mainLinksOpen ? "open" : ""}`}>
            <h3 onClick={() => toggleDropdown("mainLinks")}>
              Main Links <img src={vector} alt="" />
            </h3>
            <div className="footer-para">
              <p
                onClick={() => {
                  navigate("/");
                  setActiveLink("home");
                }}
                className={isLinkActive("home") ? "active" : ""}
              >
                Home
              </p>
              <p
                onClick={() => {
                  navigate("/about");
                  setActiveLink("about");
                }}
                className={isLinkActive("about") ? "active" : ""}
              >
                About Us
              </p>
              <p
                onClick={() => {
                  navigate("/products");
                  setActiveLink("products");
                }}
                className={isLinkActive("products") ? "active" : ""}
              >
                Products
              </p>
              <p
                onClick={() => {
                  navigate("/resources");
                  setActiveLink("resources");
                }}
                className={isLinkActive("resources") ? "active" : ""}
              >
                Resources
              </p>
              <p
                onClick={() => {
                  navigate("/contact");
                  setActiveLink("contact");
                }}
                className={isLinkActive("contact") ? "active" : ""}
              >
                Contact Us
              </p>
            </div>
          </div>
          <div className={`product-links ${productLinksOpen ? "open" : ""}`}>
            <h3 onClick={() => toggleDropdown("productLinks")}>
              Products Links <img src={vector} alt="" />
            </h3>
            <div className="footer-para">
              <p
                onClick={() => {
                  navigate("/solarphotovoltaic");
                  setActiveLink("solarphotovoltaic");
                }}
                className={isLinkActive("solarphotovoltaic") ? "active" : ""}
              >
                Solar&nbsp;Photovoltaic
              </p>
              <p
                onClick={() => {
                  navigate("/pumpingsolutions");
                  setActiveLink("pumpingsolutions");
                }}
                className={isLinkActive("pumpingsolutions") ? "active" : ""}
              >
                Pumping&nbsp;Solutions
              </p>
              <p
                onClick={() => {
                  navigate("/stpetp");
                  setActiveLink("stpetp");
                }}
                className={isLinkActive("stpetp") ? "active" : ""}
              >
                STP&nbsp;&&nbsp;ETP
              </p>
              <p
                onClick={() => {
                  navigate("/solarthermotechnology");
                  setActiveLink("solarthermotechnology");
                }}
                className={
                  isLinkActive("solarthermotechnology") ? "active" : ""
                }
              >
                Solar&nbsp;Thermotechonology
              </p>
            </div>
          </div>
          <div className={`quick-links ${quickLinksOpen ? "open" : ""}`}>
            <h3 onClick={() => toggleDropdown("quickLinks")}>
              Quick Links <img src={vector} alt="" />
            </h3>
            <div className="footer-para">
              <p
                onClick={() => {
                  navigate("/gallery");
                  setActiveLink("gallery");
                }}
                className={isLinkActive("gallery") ? "active" : ""}
              >
                Gallery
              </p>
              <p
                onClick={() => {
                  navigate("/resources");
                  setActiveLink("blog");
                }}
                className={isLinkActive("blog") ? "active" : ""}
              >
                Blog
              </p>
            </div>
          </div>
          <div className="socalmedia-links">
            <h3>Socal Media Links</h3>
            <a href="https://www.facebook.com/AasnaUrza?mibextid=ZbWKwL">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/urza_india?igshid=cmVrZjgzdmlxajll">
              <FaInstagram />
            </a>
            <a href="http://localhost:3000/">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        Powered By&nbsp;
        <a target="_blank" href="">
          Harshit Yadav
        </a>
      </div>
    </div>
  );
};

export default Footer;
