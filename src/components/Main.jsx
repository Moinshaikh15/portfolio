import React from "react";
import Header from "./Layout/Header";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Footer from "./Layout/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
export default function Main() {
  return (
    <div className="main">
      <Header />

      <Home />
      <About />
      <Projects />
      <Contact /> 
      <Footer />
    </div>
  );
}
