import React from "react";
import "../../Styles/LayoutStyle/mobileHeader.css";
import urza from "../../Assets/Images/urza.svg";
import cross from "../../Assets/Images/Group 412.svg";
import { NavLink } from "react-router-dom";

const MobileHeader = ({  isOpen, onClose}) => {
  const handleToggleMenu = () => {
    // Toggle the "no-scroll" class on the root element
    const rootElement = document.getElementById("root"); // Change this to the actual ID of your root element
    if (rootElement) {
      rootElement.classList.toggle("no-scroll", isOpen);
    }

    // Call onClose to close the mobile menu
    onClose();
  };
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
    <img  className="urza-photo" src={urza} alt="" />
      <ul>
        <li>
          <NavLink to={"/"} onClick={onClose}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} onClick={onClose}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/products"}
            onClick={onClose}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/resources"}
            onClick={onClose}
          >
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            onClick={onClose}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
        <img  className="cross" src={cross} onClick={onClose} alt="" />
    </div>
  );
};

export default MobileHeader;
