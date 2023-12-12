import React from 'react';
import Heros from "../components/Shared/Heros";
import OverViewStats from "../components/Shared/OverVeiwStats";
import WhyUs from "../components/Shared/WhyUs";
import overviewimg from "../Assets/Images/Rectangle 153o.svg";
import statsimg from "../Assets/Images/Rectangle 154s.svg";
import RequestForm from "../components/Shared/RequestForm";
import whyusImage from "../Assets/Images/Rectangle 155w.svg";

const PumpingSolutions = () => {
  
    const overviewProps = {
        imageSrc: overviewimg,
        altText: "Overview Image Alt Text",
        title: "Overview",
        content:
          "Pumping Solutions at its core is about harnessing the transformative power of solar energy to revolutionize water systems. In a world grappling with environmental challenges, our solar-powered pumping solutions offer a sustainable alternative that goes beyond conventional methods. We specialize in seamlessly integrating cutting-edge technology with solar power, ensuring efficient and eco-friendly water pumping solutions for various applications.",
      };
    
      const statsProps = {
        imageSrc: statsimg,
        altText: "Stats Image Alt Text",
        title: "Stats",
        content:
          "With a proven track record, our stats speak volumes about the impact of our solar pumping solutions. Achieving an impressive increase in efficiency and reducing carbon footprint, we have consistently outperformed industry standards. These numbers underscore our commitment to delivering tangible results and making a positive environmental impact. At Pumping Solutions, we believe in the numbers telling the story of our success in providing innovative, green solutions to water pumping challenges.",
      };
      return (
        <div>
          <section>
            <Heros title='Pumping Solutions' />
          </section>
    
          <section>
            <OverViewStats overview={overviewProps} stats={statsProps} />
          </section>
          <section>
            <WhyUs
              imageSrc={whyusImage}
              title="Why Us!"
              description="Choosing Renewable pumping solutions means choosing reliability, innovation, and sustainability. Our team of experts brings a wealth of experience in designing and implementing solar-powered pumping systems tailored to your specific needs. We prioritize customer satisfaction and environmental responsibility, ensuring that each project not only meets but exceeds expectations. With Pumping Solutions, you're not just investing in a service; you're investing in a future where efficient water pumping is synonymous with sustainability."
            />
          </section>
          <section>
            <RequestForm />
          </section>
        </div>
  )
}

export default PumpingSolutions