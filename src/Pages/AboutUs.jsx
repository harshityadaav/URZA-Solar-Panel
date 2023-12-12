import React,{useEffect}from 'react'
import Hero from "../components/AboutUsPages/Hero";
import ProductCompleted from "../components/AboutUsPages/ProductCompleted";
import FounderSpace from "../components/AboutUsPages/FounderSpace";
import OurPartners from "../components/AboutUsPages/OurPartners";
import OurTeam from "../components/AboutUsPages/OurTeam";
import "../Styles/PagesStyle/aboutUs.css";
const AboutUs = () => {
  useEffect(()=>{
    window.scroll(0,0)
  })
  return (
    <div>
      <section>
        <Hero/>
      </section>
      <section>
        <ProductCompleted/>
      </section>
      <section>
        <FounderSpace/>
      </section>
      <section>
        <OurPartners/>
      </section>
      <section>
        <OurTeam/>
      </section>
    </div>
  )
}

export default AboutUs
