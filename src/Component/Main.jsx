import React from "react";
import { MainStyle } from "../Style/Main";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Introduce from "./Introduce";
import Projects from "./Projects";

export default function Main() {
  return (
    <MainStyle>
      <div className="main_section">
        <Introduce />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </MainStyle>
  );
}
