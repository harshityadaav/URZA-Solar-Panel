import completedImg from "../../Assets/Images/Group 369.png";
import { Fade, Zoom } from "react-awesome-reveal";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useMediaQuery } from "react-responsive";

const ProductCompleted = () => {
  const isMobile = useMediaQuery({ maxWidth: 1020 }); // Adjust the max width as needed
  const ispc = useMediaQuery({ minWidth: 1021 });
  return (
    <div className="product-completed">
    <div className="completed">
      <div className="completed-numbers">
        <div className="number">
          <h1>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div style={{ height: 50 }}>
                  {isVisible ? <CountUp end={3529} /> : null}
                </div>
              )}
            </VisibilitySensor>
          </h1>
          <p>Projects Completed in <br /> Last five years</p>
        </div>
        <div className="number">
          <h1>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div style={{ height: 50 }}>
                  {isVisible ? <CountUp end={1863} /> : null}
                </div>
              )}
            </VisibilitySensor>
          </h1>
          <p>Qualified Employees <br /> & Workers With Us</p>
        </div>
        <div className="number">
          <h1>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div style={{ height: 50 }}>
                  {isVisible ? <CountUp end={100} /> : null}
                </div>
              )}
            </VisibilitySensor>
          </h1>
          <p>Awards Milestones <br /> Awarded To Us</p>
        </div>
        </div>
        {
          isMobile && <img className="mobile-completed-img" src={completedImg} alt="" />
        }
      </div>
      <div className="completed-text">
        <div className="completed-photos">
        <Zoom>
          <img  src={completedImg} alt="" />
        </Zoom>
        </div>
        {ispc &&
        <Fade direction="up">
        <div className="completed-right">
            <p>
              At Urza, we are pioneers in the entire solar energy lifecycle,
              seamlessly navigating from manufacturing to implementation.
              Founded by visionary entrepreneur Ashwani K. Chaudhary, we
              prioritize sustainable solutions, revolutionizing the solar
              industry. Our commitment extends beyond mere transactions; it's
              about empowering communities with renewable energy. With a
              relentless pursuit of excellence, Urza stands at the forefront of
              innovation, transforming the future of energy. Welcome to a world
              where passion meets progress, and solar power becomes a tangible
              reality.
            </p>
            <p>
              With an impressive career spanning over 12 years, Director Ashwani
              has made significant contributions to the marketing and sales
              sectors, with a particular focus on government, commercial, and
              residential markets. His extensive experience in these diverse
              sectors has equipped him with a unique perspective and a deep
              understanding of the intricacies involved in these domains. What
              truly sets Ashwani apart is his mastery of cutting-edge
              technologies that are shaping the future of sustainable energy
              solutions. He has dedicated himself to becoming an expert in solar
              photovoltaic technology, thermotechnology, and pumping solutions.
              This dedication has enabled him to not only stay at the forefront
              of technological advancements but also to apply this knowledge
              effectively in real-world scenarios.
            </p>
            <p>
              Ashwani's expertise in solar photovoltaic technology demonstrates
              his commitment to sustainable energy solutions. He understands the
              importance of harnessing the power of the sun to generate clean
              and renewable electricity. His mastery in this field allows him to
              design and implement solar solutions that are not only
              environmentally friendly but also economically viable.
              Furthermore, Ashwani's proficiency in thermotechnology positions
              him as a key player in the realm of thermal energy systems. He
              possesses a deep knowledge of how to optimize energy efficiency
              and manage thermal processes effectively. This expertise is
              invaluable in industries where temperature control and energy
              conservation are paramount.
            </p>
            <p>
              In addition to his prowess in solar and thermal technologies,
              Ashwani has demonstrated exceptional proficiency in pumping
              solutions. His ability to ensure high reliability in pumping
              systems is crucial for various applications, ranging from water
              supply to industrial processes. Ashwani's innovative approach to
              pumping solutions ensures that they meet the highest standards of
              efficiency and reliability.
            </p>
          
        </div>
        </Fade>
        }{isMobile &&
          <div className="completed-right">
            <p>
              At Urza, we are pioneers in the entire solar energy lifecycle,
              seamlessly navigating from manufacturing to implementation.
              Founded by visionary entrepreneur Ashwani K. Chaudhary, we
              prioritize sustainable solutions, revolutionizing the solar
              industry. Our commitment extends beyond mere transactions; it's
              about empowering communities with renewable energy. With a
              relentless pursuit of excellence, Urza stands at the forefront of
              innovation, transforming the future of energy. Welcome to a world
              where passion meets progress, and solar power becomes a tangible
              reality.
            </p>
            <p>
              With an impressive career spanning over 12 years, Director Ashwani
              has made significant contributions to the marketing and sales
              sectors, with a particular focus on government, commercial, and
              residential markets. His extensive experience in these diverse
              sectors has equipped him with a unique perspective and a deep
              understanding of the intricacies involved in these domains. What
              truly sets Ashwani apart is his mastery of cutting-edge
              technologies that are shaping the future of sustainable energy
              solutions. He has dedicated himself to becoming an expert in solar
              photovoltaic technology, thermotechnology, and pumping solutions.
              This dedication has enabled him to not only stay at the forefront
              of technological advancements but also to apply this knowledge
              effectively in real-world scenarios.
            </p>
            <p>
              Ashwani's expertise in solar photovoltaic technology demonstrates
              his commitment to sustainable energy solutions. He understands the
              importance of harnessing the power of the sun to generate clean
              and renewable electricity. His mastery in this field allows him to
              design and implement solar solutions that are not only
              environmentally friendly but also economically viable.
              Furthermore, Ashwani's proficiency in thermotechnology positions
              him as a key player in the realm of thermal energy systems. He
              possesses a deep knowledge of how to optimize energy efficiency
              and manage thermal processes effectively. This expertise is
              invaluable in industries where temperature control and energy
              conservation are paramount.
            </p>
            <p>
              In addition to his prowess in solar and thermal technologies,
              Ashwani has demonstrated exceptional proficiency in pumping
              solutions. His ability to ensure high reliability in pumping
              systems is crucial for various applications, ranging from water
              supply to industrial processes. Ashwani's innovative approach to
              pumping solutions ensures that they meet the highest standards of
              efficiency and reliability.
            </p>
          
        </div>}
      </div>
    </div>
  );
};

export default ProductCompleted;
