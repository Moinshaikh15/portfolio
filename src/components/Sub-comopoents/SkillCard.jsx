import React, { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";
export default function SkillCard({ skill }) {
  const [bgColor, setBgColor] = useState("");
  useEffect(() => {
    new FastAverageColor()
      .getColorAsync(`/icons/${skill.toLowerCase()}.png`)
      .then((color) => {
        const rgba = color.rgb.split(")");
        setBgColor(rgba[0] + ",0.07)");
      })
      .catch((e) => {
        console.log(e);
      });
  }, [`/icons/${skill.toLowerCase()}.png`]);
  return (
    <div title={skill} >
      <div className="skill-div" style={{ backgroundColor: bgColor }}>
        <img src={`/icons/${skill.toLowerCase()}.png`} alt="" />
      </div>
      <p style={{ textAlign: "center" }}>{skill}</p>
    </div>
  );
}
