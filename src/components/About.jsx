import React from "react";
import profile from "../assets/About Me.png";

const About = () => {
  return (
    <div id="about" className="d-flex align-items-center">
      <div className="aboutme">
        <img src={profile} alt="" />
      </div>
      <div className="about-txt">
        <div className="first-abouttxt">
          <p>About</p>
          <h4>About Me</h4>
        </div>
        <p className="about-par">
          Hi, I'm Iyiola, a passionate web-developer dedicated to creating
          user-friendly solutions. With a focus on responsive app design, I
          ensure flawless experience across all devices. I love to collaborate
          and continuously learn to stay updated with industry activities.
          Outside of work, I enjoy going through new technologies. Let's develop
          something marvellous together.
        </p>
      </div>
    </div>
  );
};

export default About;
