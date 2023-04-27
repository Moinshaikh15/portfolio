import React, { useEffect, useState } from "react";
import Skills from "../Sub-comopoents/Skills";

export default function About() {
  return (
    <div className="about" id="About">
      <h2>About me</h2>
      <div className="about-main">
        <div className="left">
          <img src="profile_photo.png" alt="" />
        </div>
        <div className="right">
          <p className="name">Moin Shaikh</p>
          <p>
            I'm a{" "}
            <span style={{ color: "rgb(109 40 217)" }}>
              Full Stack developer (MERN)
            </span>{" "}
            based in Nasik, India. I've completed my Diploma in Electronics &
            Telecommunication Engg. I found my interest in Web Development
            during covid lock-down period. I love making Web apps, Websites. I
            love developing beautifully designed websites and apps. I love
            traveling, and exploring new places. I'm fond of paintings so
            occasionally loves to draw or make paintings of something
            interesting. Love for the Art attracted me more towards the Web
            Development.
          </p>
        </div>
      </div>

      <Skills />
    </div>
  );
}
