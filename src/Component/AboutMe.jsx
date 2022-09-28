import React from "react";
import { AboutMeStyle } from "../Style/AboutMe";
import { Icon } from "@iconify/react";
import Modal from "./Modal";
import { useState } from "react";

export default function AboutMe() {
  const [show, setShow] = useState(false);
  return (
    <AboutMeStyle>
      <div className="main_aboutme_section" id="aboutme">
        <div className="main_about_learn_container">
          <h2 className="main_about_h2">Skills</h2>
          <p className="main_abount_sentence">
            I have learned front-end programming languages so far.
          </p>
          <div className="main_about_icons">
            <div className="main_about_icon">
              <Icon
                icon="akar-icons:html-fill"
                color="#303033"
                className="main_icon"
              />
            </div>
            <div className="main_about_icon">
              <Icon
                icon="akar-icons:css-fill"
                color="#303033"
                className="main_icon"
              />
            </div>
            <div className="main_about_icon">
              <Icon icon="fa-brands:js" color="#303033" className="main_icon" />
            </div>
            <div className="main_about_icon">
              <Icon
                icon="akar-icons:react-fill"
                color="#303033"
                className="main_icon"
              />
            </div>
            <div className="main_about_icon">
              <Icon
                icon="akar-icons:github-fill"
                color="#303033"
                className="main_icon"
              />
            </div>
            <div className="main_about_icon">
              <Icon
                icon="fa-brands:node"
                color="#303033"
                className="main_icon"
              />
            </div>
            <div className="main_about_icon">
              <Icon icon="bxl:firebase" color="#303033" className="main_icon" />
            </div>
          </div>
        </div>
        <div className="main_about_career_container">
          <h2 className="main_about_h2 main_about_second">Career</h2>
          <p className="main_about_second_sentence">
            Cornerstone International (CICCC) - December 2022 <br /> Web
            development co-op diploma Tokai University - March 2018 <br />{" "}
            Department of Political Science and Economics(SPEM)
          </p>
        </div>
        <div className="main_about_photoes_container">
          <h2 className="main_about_h2 main_about_third">Myself</h2>
          <p className="main_about_third_sentence">
            I like playing tennis, taking photos, and doing some activities.
            Those times make me feel good and change my mind.
          </p>
          <span className="main_about_third_sentence">
            Please click it to see more information →{" "}
          </span>
          <div className="main_about_button_container">
            <button
              onClick={() => setShow(true)}
              className="main_about_third_button"
            >
              Show my photoes
            </button>
            <Modal show={show} onClose={() => setShow(false)} />
          </div>
        </div>
      </div>
    </AboutMeStyle>
  );
}
