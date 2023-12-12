import { Player } from "@lottiefiles/react-lottie-player";
import facebook from "../../Assets/LotteiFiles/Facebook.json";
import instagram from "../../Assets/LotteiFiles/Instagram.json";
import youtube from "../../Assets/LotteiFiles/Youtube.json";
import pointer from "../../Assets/Images/pointer.svg";
import { Fade, Zoom } from "react-awesome-reveal";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <div className="social-media-options">
        <div className="social-options">
          <div className="social-option1">
            <Zoom  >
              <Player
                autoplay
                hover
                src={facebook}
                style={{ height: "3.5rem" }}
              ></Player>
            </Zoom>
            <Zoom  >
              <Player
                autoplay
                hover
                src={instagram}
                style={{ height: "3.5rem", padding: "5px" }}
              ></Player>
            </Zoom>
            <Zoom  >
              <Player
                autoplay
                hover
                src={youtube}
                style={{ height: "3.5rem", padding: "5px" }}
              ></Player>
            </Zoom>
          </div>
          <div className="social-option2">
            <Fade direction="down"  >
              <h1>
                Facebook
                <Zoom  >
                  <img src={pointer} alt="" />
                </Zoom>
              </h1>
            </Fade>
            <Fade direction="down"  >
              <h1>
                Instagram
                <Zoom  >
                  <img src={pointer} alt="" />
                </Zoom>
              </h1>
            </Fade>
            <Fade direction="down"  >
              <h1>
                Youtube
                <Zoom  >
                  <img src={pointer} alt="" />
                </Zoom>
              </h1>
            </Fade>
          </div>
        </div>
      </div>
      <div className="social-media-content">
        <Fade direction="down"   delay={10}>
          <h1>
            <span
              style={{
                color: "var(--primary)",
                borderBottom: "2px solid var(--secondary)",
              }}
            >
              SOCIAL
            </span>
            <span style={{ color: "var(--secondary)" }}> MEDIA</span>
          </h1>
        </Fade>
        <Fade direction="up"   delay={10}>
          <p>
          Embark on an electrifying journey with Team Urza!  Our squad of solar enthusiasts is on social media to transform your space into an eco-oasis. Let's harness the sun's power together—because sustainability is not just a choice; it's a lifestyle. Join the solar revolution!
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default SocialMedia;

