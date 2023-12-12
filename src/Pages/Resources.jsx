import React from 'react'
import Hero from "../components/RescoursePages/Hero";
import GallerySection from '../components/RescoursePages/GallerySection';
import "../Styles/PagesStyle/aboutUs.css";
import BlogsSection from '../components/RescoursePages/BlogsSection';
import HelpAndFQ from '../components/RescoursePages/HelpAndFQ';
import PolicyPrivacy from '../components/RescoursePages/PolicyPrivacy';
const Resources = () => {
  return (
    <div>
      <section>
        <Hero/>
      </section>
      <section>
        <GallerySection />
      </section>
      <section>
        <BlogsSection />
      </section>
      <section>
        <PolicyPrivacy />
      </section>
      <section>
        <HelpAndFQ />
      </section>
    </div>
  )
}

export default Resources;
