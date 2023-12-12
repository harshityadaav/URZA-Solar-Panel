import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../../Styles/LayoutStyle/layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const scrollableContainer = useRef(null);

  useEffect(() => {
    if (scrollableContainer.current) {
      scrollableContainer.current.scrollTop = 0;
    }
  }, [location]);

  return (
    <div
      className="layout"
      ref={scrollableContainer}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;