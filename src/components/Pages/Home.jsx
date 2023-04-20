import React from "react";

export default function Home() {
  return (
    <div className="home-page-main">
      <div className="left">
        <div className="info">
          <p>
            Hello! <span style={{ color: "#02b48f" }}>I'm</span>{" "}
          </p>
          <h1>Moin Shaikh</h1>
          <p style={{ fontSize: "20px" }}>Full Stack Developer</p>
          <p>
            I'm a MERN Stack developer, who loves to learn and creatively solve
            problems, Ambitious and excited to work on new projects and other
            challenging opportunities, I have experience with technologies such
            as HTML, CSS, JavaScript, React.js, Tailwind CSS, Redux, Express.js,
            Node.js, Firebase, MongoDB, PostgreSQL, etc.
          </p>
        </div>
        <div className="social-accounts">
          <a href="https://www.upwork.com/freelancers/~01726571141e12b1a6">
            <img src="icons/upwork.png" alt="" className="icons" />
          </a>
          <a href="https://github.com/Moinshaikh15">
            <img src="icons/github.png" alt="" className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/moin-shaikh-56970b235">
            <img src="icons/linkedin.png" alt="" className="icons" />
          </a>
        </div>
      </div>

      <div className="image-container">
        <img src="" alt="" />
      </div>
    </div>
  );
}
