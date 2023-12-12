import sAp from "../../Assets/Images/stp-etp.svg";
import arrow from "../../Assets/Images/Group 1.svg";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const STPAndETP = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 1020 });
  const ispc = useMediaQuery({ minWidth: 1021 });
  return (
    <div className="set-etp">
      {ispc && (
        <Fade direction="left">
          <img className="stpetp-img" src={sAp} alt="" />
        </Fade>
      )}
      {isMobile && <img className="stpetp-img" src={sAp} alt="" />}
      <div className="sAp-content">
        <h1>
          <Fade direction="down">
            <span style={{ color: "var(--primary)" }}>STP&nbsp;</span>
            <span style={{ color: "var(--secondary)" }}>And&nbsp;</span>
            <span style={{ color: "var(--primary)" }}>ETP</span>
          </Fade>
        </h1>
        <p>
          <Fade direction="down">
            At Urza, we specialize in providing comprehensive solutions for
            sewage treatment plants (STPs) and effluent treatment plants (ETPs)
            powered by solar energy. Our integrated approach ensures
            environmentally responsible wastewater management, promoting
            sustainable practices. By harnessing the power of the sun, we not
            only treat sewage and effluents efficiently but also contribute to
            reducing carbon footprints.
          </Fade>
        </p>
        <Fade direction="up">
          <button onClick={() => navigate("/stpetp")}>
            View&nbsp;More
            <img src={arrow} alt="" />
          </button>
        </Fade>
      </div>
    </div>
  );
};

export default STPAndETP;
