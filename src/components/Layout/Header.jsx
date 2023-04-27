import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
export default function Header() {
  let [selectedPage, setSelectedPage] = useState("Home");

  const menu = ["Home", "About", "Projects", "Experience"];
  return (
    <div className="Header">
      <h2>Ms</h2>
      <ul>
        {menu.map((e, i) => (
          <li key={i}>
            <ScrollLink
              className=""
              to={e}
              offset={-60}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              {e}
            </ScrollLink>
          </li>
        ))}
      </ul>

      <button>Contact</button>
    </div>
  );
}
