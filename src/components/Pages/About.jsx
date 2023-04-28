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
            I am a highly skilled{" "}
            <span style={{ color: "rgb(109 40 217)" }}>
              Full Stack developer
            </span>{" "}
            with expertise in{" "}
            <span style={{ color: "rgb(109 40 217)" }}>MERN/PERN</span>{" "}
            technology. Presently, I am located in Nasik, India and I
            am actively providing my services on Upwork, where I have earned a
            stellar reputation for delivering top-notch web development
            solutions to my clients. I am proud to have completed my Diploma in
            Electronics & Telecommunication Engineering.
          </p>

          <p>
            During the covid lockdown period, I discovered my passion for Web
            Development, and since then, I have never looked back. I have a
            natural talent for creating stunning web apps and websites that are
            not only visually appealing but also highly functional. I derive
            immense pleasure from bringing my clients' visions to life and
            creating unique digital experiences for their users.
          </p>

          <p>
            Apart from my work, I enjoy traveling and exploring new places. I
            find inspiration in different cultures, landscapes, and people,
            which I incorporate into my design and development work. I also have
            a deep passion for cars. I enjoy learning about their intricate
            mechanics and appreciating their sleek designs. This passion has
            taught me the importance of attention to detail, a skill that is
            crucial to my work as a web developer. Additionally, I am an avid
            painter and enjoy creating unique pieces of art. My love for the Art
            has always been a driving force behind my passion for Web
            Development.
          </p>
        </div>
      </div>

      <Skills />
    </div>
  );
}
