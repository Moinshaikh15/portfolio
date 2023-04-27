import React from "react";

export default function Home() {
  return (
    <div className="home-page-main" id="Home">
      <div className="left">
        <div className="info">
          <h2>
            Hello! <span style={{ color: "#02b48f" }}>I'm</span>{" "}
          </h2>
          <h1>Moin Shaikh</h1>
          <h2 style={{ color: "#c4c3c3" }}>Full Stack Developer</h2>
          <p>
            I'm a MERN Stack developer, who loves to learn and creatively solve
            problems, Ambitious and excited to work on new projects and other
            challenging opportunities.
          </p>
        </div>
        <div className="social-accounts">
          <a
            href="https://www.upwork.com/freelancers/~01726571141e12b1a6"
            target="_blank"
          >
            <img src="icons/upwork1.png" alt="" className="icons" />
          </a>
          <a href="https://github.com/Moinshaikh15" target="_blank">
            <img src="icons/github.png" alt="" className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/moin-shaikh-56970b235"
            target="_blank"
          >
            <img src="icons/linkedin1.png" alt="" className="icons" />
          </a>
        </div>
      </div>

      <div className="image-container">
        {/* <div className="image-bg-box1">

        </div>
        <div className="image-bg-box2">

</div> */}
        {/* <img src="profile_photo.png" alt="" /> */}
      </div>
    </div>
  );
}
