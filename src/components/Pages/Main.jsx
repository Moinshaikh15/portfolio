import React from "react";
import Header from "../Layout/Header";
import Home from "./Home";
import Projects from "./Projects";
import Footer from "../Layout/Footer";
import About from "./About";
export default function Main() {
  return (
    <div className="main">
      <Header />

      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
