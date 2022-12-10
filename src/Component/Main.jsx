import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Introduce from "./Introduce";
import Projects from "./Projects";

export default function Main() {
  return (
    <div className="main_section" id="top">
      <Introduce />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
