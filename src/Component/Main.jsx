import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Introduce from "./Introduce";
import Projects from "./Projects";
import { MainStyle } from "../Style/Main";

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
