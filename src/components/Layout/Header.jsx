import React, { useState } from "react";

export default function Header() {
  let [selectedPage, setSelectedPage] = useState("Home");
  return (
    <div className="Header">
      <h2>Ms</h2>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Testimonials</li>
        <li>Resume</li>
      </ul>

      <button>Contact</button>
    </div>
  );
}
