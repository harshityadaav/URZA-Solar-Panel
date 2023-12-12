import { useNavigate } from "react-router-dom";
import arrow from "../../Assets/Images/Group 1.svg";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Resources = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 1020 }); 
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1021 });

  const renderSections = () => {
    const sections = [
      {
        title: "Lorem, ipsum dolor",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, reiciendis pariatur quos aliquam voluptates non sapiente architecto earum doloremque beatae lorem30 ",
      },
      {
        title: "Lorem, ipsum dolor",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, reiciendis pariatur quos aliquam voluptates non sapiente architecto earum doloremque beatae...",
      },
      {
        title: "Lorem, ipsum dolor",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, reiciendis pariatur quos aliquam voluptates non sapiente architecto earum doloremque beatae...",
      },
      {
        title: "Lorem, ipsum dolor",
        content:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, reiciendis pariatur quos aliquam voluptates non sapiente architecto earum doloremque beatae...",
      },
    ];

    return sections.map((section, index) => (
      <Fade key={index} direction={index % 2 === 0 ? "down" : "up"} delay={40 * index}>
        <div className="resources-option">
          <div className={`img${index + 1} section-image`}></div>
          <section className="section">
            <h1>{section.title}</h1>
            <p>{section.content}</p>
            {isMobileOrTablet && (
              <button className="Resource-button ">
                Read More
                <img src={arrow} alt="" />
              </button>
            )}
          </section>
        </div>
      </Fade>
    ));
  };

  return (
    <div className="resources">
      <Fade direction="down">
        <h1 className="resources-heading">RESOURCES</h1>
      </Fade>

      {isMobileOrTablet ? (
        <AwesomeSlider className="resources-options" organicArrows={false}>
          {renderSections()}
        </AwesomeSlider>
      ) : (
        <div className="resources-options">
          <Fade direction="down" delay={40}>
            {renderSections()}
          </Fade>
        </div>
      )}

      <Fade direction="up" delay={120}>
        <button onClick={() => navigate("/resources")} className="Resource-button botton-position">
          View More
          <img src={arrow} alt="" />
        </button>
      </Fade>
    </div>
  );
};

export default Resources;