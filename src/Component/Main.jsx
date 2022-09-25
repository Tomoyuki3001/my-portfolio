import React from "react";
import { MainStyle } from "../Style/Main";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Introduce from "./Introduce";
import Projects from "./Projects";

export default function Main() {
  return (
    <MainStyle>
      <div className="main_section" id="top">
        <Introduce />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </MainStyle>
  );
}
