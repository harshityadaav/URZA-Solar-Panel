import React, { useRef } from "react";
import "../../Styles/PagesStyle/ContactForm.css";
import { Player } from "@lottiefiles/react-lottie-player";
import GoogleMapReact from "google-map-react";
import faceBook from "../../Assets/LotteiFiles/Facebookb.json";
import instaGarm from "../../Assets/LotteiFiles/Instagramb.json";
import whatsApp from "../../Assets/LotteiFiles/Whatsappb.json";
import gmail from "../../Assets/LotteiFiles/Mail.json";
import { Zoom } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";

const ContactForm = () => {
  const form = useRef();
  const isMobile = useMediaQuery({ maxWidth: 1020 }); // Adjust the max width as needed

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j7c1lm8",
        "template_7hp5ssk",
        form.current,
        "KmRWVa5bytnMYoLj9"
      )
      .then(
        (result) => {
          alert("Send Message Successfully");
          console.log("Email successfully sent:", result.text);
        },
        (error) => {
          console.log("Email sending failed:", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="main">
      <div className="sidebar">
        <div className="lottie">
          <Zoom>
            <Player
              src={faceBook}
              hover
              autoplay
              controls={false}
              style={{ width: "82.614px", height: "82.614px", flexShrink: 0, marginBottom:"5px" }}
            />
          </Zoom>
          <Zoom>
            <Player
              src={instaGarm}
              hover
              autoplay
              controls={false}
              style={{ width: "68.845px", height: "68.845px", flexShrink: 0, marginBottom:"15px"}}
            />
          </Zoom>
          <Zoom>
            <Player
              src={whatsApp}
              hover
              autoplay
              controls={false}
              style={{ width: "68.845px", height: "68.845px", flexShrink: 0 }}
            />
          </Zoom>
          <Zoom>
            <Player
              src={gmail}
              hover
              autoplay
              controls={false}
              style={{ width: "75.729px", height: "75.729px", flexShrink: 0,marginBottom:"5px" }}
            />
          </Zoom>
        </div>
      </div>

      <div className="ContacttUs">
        <h1>
          Contact <span className="yellow-text">Us</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="from_name" required/>
          <input type="email" placeholder="Email" name="from_email" required/>
          <input type="text" placeholder="Message" name="message" required/>
          <input type="submit" className="submit" value="Send Message"></input>
        </form>
      </div>

      <div className="map-content">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBu4p3ZP9zL0BHOW2j1UU1odWIwu-3asBg" }}
          defaultCenter={{ lat: 30.293586, lng: 77.9974004 }}
          defaultZoom={11}
        ></GoogleMapReact>
      </div>
      {isMobile && 
        <div className="lottie">
          <Zoom>
            <Player
              src={faceBook}
              hover
              autoplay
              controls={false}
              style={{ width: "82.614px", height: "82.614px", flexShrink: 0 }}
            />
          </Zoom>
          <Zoom>
            <Player
              src={instaGarm}
              hover
              autoplay
              controls={false}
              style={{ width: "68.845px", height: "68.845px", flexShrink: 0,marginRight:"10px", marginLeft:"-5px"}}
            />
          </Zoom>
          <Zoom>
            <Player
              src={whatsApp}
              hover
              autoplay
              controls={false}
              style={{ width: "68.845px", height: "68.845px", flexShrink: 0,marginRight:"5px"}}
            />
          </Zoom>
          <Zoom>
            <Player
              src={gmail}
              hover
              autoplay
              controls={false}
              style={{ width: "80.729px", height: "90.729px", flexShrink: 0 }}
            />
          </Zoom>
        </div>}
    </div>
  );
};

export default ContactForm;
