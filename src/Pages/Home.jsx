import React from "react";
import Hero from "../components/HomePages/Hero";
import OurAchivements from "../components/HomePages/OurAchivements";
import Resources from "../components/HomePages/Resources";
import AboutUs from "../components/HomePages/AboutUs";
import SocialMedia from "../components/HomePages/SocialMedia";
import OurMissionAndVision from "../components/HomePages/OurMissionAndVision";
import "../Styles/PagesStyle/home.css";
const Home = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <OurMissionAndVision/>
      </section>
      <section>
        <OurAchivements/>
      </section>
      <section>
        <Resources/>
      </section>
      <section>
        <AboutUs/>
      </section>
      <section>
        <SocialMedia/>
      </section>
    </>
  );
};

export default Home;
