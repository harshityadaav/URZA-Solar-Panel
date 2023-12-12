import React from "react";
import Heros from "../components/Shared/Heros";
import OverViewStats from "../components/Shared/OverVeiwStats";
import WhyUs from "../components/Shared/WhyUs";
import overviewimg from "../Assets/Images/Rectangle 153.svg";
import statsimg from "../Assets/Images/Rectangle 154.svg";
import RequestForm from "../components/Shared/RequestForm";
import whyusImage from "../Assets/Images/Rectangle 155.svg";
const SolarPhotovoltaic = () => {
  const overviewProps = {
    imageSrc: overviewimg,
    altText: "Overview Image Alt Text",
    title: "Overview",
    content:
      "With an unwavering commitment to sustainable energy solutions, solar photovoltaic (PV) technology has emerged as a beacon of environmental responsibility. Harnessing the power of sunlight, PV systems convert solar energy into electricity, offering a clean and renewable alternative to traditional sources. The simplicity of this technology, where sunlight activates semiconductor materials to generate an electric current, underscores its elegance and efficiency.",
  };

  const statsProps = {
    imageSrc: statsimg,
    altText: "Stats Image Alt Text",
    title: "Stats",
    content:
      "In the realm of solar photovoltaic statistics, the numbers tell a compelling story. With global installations surpassing hundreds of gigawatts, solar PV has become a dominant force in the energy landscape. The declining costs of solar panels, coupled with increasing efficiency, have paved the way for widespread adoption. Beyond its environmental merits, solar PV is a sound economic investment, providing businesses and homeowners with long-term energy cost savings. The statistics echo a clear message: solar photovoltaic is not just a trend; it's a transformative force shaping the future of energy.",
  };
  return (
    <div>
      <section>
        <Heros title='Solar Photovoltaic'/>
      </section>

      <section>
        <OverViewStats overview={overviewProps} stats={statsProps} />
      </section>
      <section>
        <WhyUs
          imageSrc={whyusImage}
          title="Why Us!"
          description="Why choose us for your solar thermotechnology needs? At our core, we
          bring expertise and innovation to the table. Our commitment to
          delivering cutting- edge solutions is matched only by our dedication
          to client satisfaction. With a team of experienced professionals and a
          track record of successful implementations, we stand as a reliable
          partner in your journey towards a sustainable future. Choose us for
          unparalleled excellence in solar thermotechnology and a commitment to
          a greener tomorrow."
        />
      </section>
      <section>
        <RequestForm />
      </section>
    </div>
  );
};

export default SolarPhotovoltaic;
