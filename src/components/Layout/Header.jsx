import React, { useState, useEffect } from "react";
import MobileHeader from "./MobileHeader"
import "../../Styles/LayoutStyle/header.css";
import urzaLogo from "../../Assets/Logos/urza-logo.svg"
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("Home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1020 });
  const ispc = useMediaQuery({minWidth:1021});


  const handleNavLinkClick = (option) => {
    setSelectedOption(option);
    setMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  useEffect(() => {
    // Extract the pathname from the current location
    const currentPath = location.pathname;

    // Set the selected option based on the current route
    if (currentPath === "/") {
      setSelectedOption("Home");
    } else if (currentPath === "/about") {
      setSelectedOption("About Us");
    } else if (currentPath === "/products") {
      setSelectedOption("Products");
    } else if (currentPath === "/resources") {
      setSelectedOption("Resources");
    } else if (currentPath === "/contact") {
      setSelectedOption("Contact Us");
    }
  }, [location.pathname]);

  return (
    <div className="header">
    {/* Hamburger icon for mobile */}
    {isMobile &&<img src={urzaLogo} alt="" className="mobile-logo"/>}
    {isMobile && 
    <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </div>}
      {/* Render the MobileMenu component */}
      <MobileHeader isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
       {ispc &&<img src={urzaLogo} alt="" className="pc-logo"/>}
      <ul className="nav-list">
        <li>
          <NavLink
            style={{ color: selectedOption === "Home" ? "yellow" : "white" }}
            className="nav_item"
            to={"/"}
            onClick={() => handleNavLinkClick("Home")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ color: selectedOption === "About Us" ? "yellow" : "white" }}
            className="nav_item"
            to={"/about"}
            onClick={() => handleNavLinkClick("About Us")}
          >
            About&nbsp;Us
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ color: selectedOption === "Products" ? "yellow" : "white" }}
            className="nav_item"
            to={"/products"}
            onClick={() => handleNavLinkClick("Products")}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ color: selectedOption === "Resources" ? "yellow" : "white" }}
            className="nav_item"
            to={"/resources"}
            onClick={() => handleNavLinkClick("Resources")}
          >
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ color: selectedOption === "Contact Us" ? "yellow" : "white" }}
            className="nav_item"
            to={"/contact"}
            onClick={() => handleNavLinkClick("Contact Us")}
          >
            Contact&nbsp;Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
