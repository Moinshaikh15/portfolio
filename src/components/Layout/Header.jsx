import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
export default function Header() {
  let [selectedPage, setSelectedPage] = useState("Home");
  let [showMenu, setShowMenu] = useState(false);
  let [inputFocused, setInputFocused] = useState(false);
  const menu = ["Home", "About", "Projects"];

  return (
    <div className="Header">
      <h2>Ms</h2>
      <ul className="desktop-menu">
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

      {/* <div className="input-div">
        <input
          type="text"
          onFocus={() => {
            console.log("dd");
            setInputFocused(!inputFocused);
          }}
          onBlur={() => setInputFocused(false)}

        />
        <div
          className="drop-input"
          style={{
            display: inputFocused ? "flex" : "none",
          }}
        >
          <input type="text" />
        </div>
      </div> */}

      <button className="desktop-cont-btn">
        <ScrollLink
          className=""
          to="Contact"
          offset={-60}
          smooth={true}
          duration={500}
          isDynamic={true}
        >
          Contact
        </ScrollLink>{" "}
      </button>

      {/*  Hamburger Menu */}
      {/* <img
        src="/icons/menu.png"
        alt=""
        className="ham-menu-icon"
        onClick={() => setShowMenu(!showMenu)}
        style={{
          display: showMenu ? "none" : "",
        }}
      /> */}
      <div
        className="menu-line-container"
        onClick={() => setShowMenu(!showMenu)}
        style={{
          display: showMenu ? "none" : "",
        }}
      >
        <div className="line" style={{ width: "16px" }}></div>
        <div
          className="line"
          style={{ width: "24px", backgroundColor: "#c0bfbf" }}
        ></div>
        <div className="line" style={{ width: "20px" }}></div>
      </div>
      <div
        className="ham-menu"
        style={{
          display: !showMenu ? "none" : "",
        }}
      >
        <img
          src="/icons/close.png"
          alt=""
          className="close"
          onClick={() => setShowMenu(!showMenu)}
        />

        <ul className="mobile-menu">
          {menu.map((e, i) => (
            <li key={i}>
              <ScrollLink
                className=""
                to={e}
                offset={-60}
                smooth={true}
                duration={500}
                isDynamic={true}
                onClick={() => setShowMenu(!showMenu)}
              >
                {e}
              </ScrollLink>
            </li>
          ))}
          <li>
            <ScrollLink
              className=""
              to="Contact"
              offset={-60}
              smooth={true}
              duration={500}
              isDynamic={true}
              onClick={() => setShowMenu(!showMenu)}
            >
              Contact
            </ScrollLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
