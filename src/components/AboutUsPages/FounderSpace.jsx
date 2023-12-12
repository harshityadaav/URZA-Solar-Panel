import founder from "../../Assets/Images/Rectangle 50.png";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";
const FounderSpace = () => {
  const pc = useMediaQuery({ minWidth: 1020 });
  const mobile = useMediaQuery({maxWidth: 1021});
  return (
    <div className="founder-space">
      <h1 className="founder-heading">
        <Fade direction="down">
          <span style={{ color: "var(--secondary)" }}>FOUNDER</span>
          <span style={{ color: "var(--primary-background)" }}>'SPACE</span>
        </Fade>
      </h1>
      {pc &&
      <div className="founder-content">
        <div className="founder-photo">
           <Fade direction="right"> 
            <img className="founder-img" src={founder} alt="" />
          </Fade>
        </div>
        <Fade direction="left">
          <div className="founder-text">
            <div className="founder-para">
              <p>
                Founded by visionary entrepreneur Ashwani K. Chaudhary, we
                prioritize sustainable solutions, revolutionizing the solar
                industry. Our commitment extends beyond mere transactions; it's
                about empowering communities with renewable energy.
              </p>
              <p>
                With a relentless pursuit of excellence, Urza stands at the
                forefront of innovation, transforming the future of energy.
                Welcome to a world where passion meets progress, and solar power
                becomes a tangible reality.
              </p>
              <p>
                With an impressive career spanning over 12 years, Ashwani has
                made significant contributions to the marketing and sales
                sectors, with a particular focus on government, commercial, and
                residential markets. His extensive experience in these diverse
                sectors has equipped him with a unique perspective and a deep
                understanding of the intricacies involved in these domains.
              </p>
              <p>
                What truly sets Ashwani apart is his mastery of cutting-edge
                technologies that are shaping the future of sustainable energy
                solutions. He has dedicated himself to becoming an expert in
                solar photovoltaic technology, thermotechnology, and pumping
                solutions. This dedication has enabled him to not only stay at
                the forefront of technological advancements .
              </p>
            </div>
          </div>
        </Fade>
      </div>
      }{mobile && 
      <div className="founder-content">
        <div className="founder-photo">
            <img className="founder-img" src={founder} alt="" />
        </div>
          <div className="founder-text">
            <div className="founder-para">
              <p>
                Founded by visionary entrepreneur Ashwani K. Chaudhary, we
                prioritize sustainable solutions, revolutionizing the solar
                industry. Our commitment extends beyond mere transactions; it's
                about empowering communities with renewable energy.
              </p>
              <p>
                With a relentless pursuit of excellence, Urza stands at the
                forefront of innovation, transforming the future of energy.
                Welcome to a world where passion meets progress, and solar power
                becomes a tangible reality.
              </p>
              <p>
                With an impressive career spanning over 12 years, Ashwani has
                made significant contributions to the marketing and sales
                sectors, with a particular focus on government, commercial, and
                residential markets. His extensive experience in these diverse
                sectors has equipped him with a unique perspective and a deep
                understanding of the intricacies involved in these domains.
              </p>
              <p>
                What truly sets Ashwani apart is his mastery of cutting-edge
                technologies that are shaping the future of sustainable energy
                solutions. He has dedicated himself to becoming an expert in
                solar photovoltaic technology, thermotechnology, and pumping
                solutions. This dedication has enabled him to not only stay at
                the forefront of technological advancements .
              </p>
            </div>
          </div>
          </div>
      }
    </div>
  );
};

export default FounderSpace;
