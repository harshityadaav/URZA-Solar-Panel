import React from "react";
import Heros from "../components/Shared/Heros";
import OverViewStats from "../components/Shared/OverVeiwStats";
import WhyUs from "../components/Shared/WhyUs";
import overviewimg from "../Assets/Images/Rectangle 153ov.svg";
import statsimg from "../Assets/Images/Rectangle 154st.svg";
import RequestForm from "../components/Shared/RequestForm";
import whyusImage from "../Assets/Images/Rectangle 155wu.svg";

const STPETP = () => {
  const overviewProps = {
    imageSrc: overviewimg,
    altText: "Overview Image Alt Text",
    title: "Overview",
    content:
      "At Urza, we specialize in providing comprehensive solutions for sewage treatment plants (STPs) and effluent treatment plants (ETPs) powered by solar energy. Our integrated approach ensures environmentally responsible wastewater management, promoting sustainable practices. By harnessing the power of the sun, we not only treat sewage and effluents efficiently but also contribute to reducing carbon footprints.",
  };

  const statsProps = {
    imageSrc: statsimg,
    altText: "Stats Image Alt Text",
    title: "Stats",
    content:
      "Backed by cutting-edge technology, our STPs and ETPs boast impressive statistics. We consistently achieve high treatment efficiency, ensuring the purification of water to meet stringent quality standards. Our solar-powered systems not only make the treatment process energy-efficient but also offer substantial cost savings, making it a smart investment for businesses and communities alike.",
  };
  return (
    <div>
      <section>
        <Heros title='STP & ETP' />
      </section>
      <section>
        <OverViewStats overview={overviewProps} stats={statsProps} />
      </section>
      <section>
        <WhyUs
          imageSrc={whyusImage}
          title="Why Us!"
          description="Choose Urza for sewage and effluent treatment powered by solar energy, and experience a paradigm shift in eco-friendly wastewater solutions. Our commitment to excellence, innovative technology, and a deep understanding of environmental impact sets us apart. With Urza, you not only invest in top-notch treatment facilities but also actively contribute to a greener and more sustainable future."
        />
      </section>
      <section>
        <RequestForm />
      </section>
    </div>
  );
};

export default STPETP;
