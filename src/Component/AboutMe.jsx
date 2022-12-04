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
          <h2 className="main_about_h2">Technical Specifications</h2>
          <p className="main_about_sentence">
            HTML, CSS, JavaScript, React, GitHub, Node.js, Firebase{" "}
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
          <button className="main_about_resume_button">
            <a
              className="main_about_resume_link"
              href={`${process.env.PUBLIC_URL}/TomoyukiFujii.pdf`}
              download="TomoyukiFujii.pdf"
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="main_about_career_container">
          <h2 className="main_about_h2">Education</h2>
          <div className="main_about_second_sentence">
            <p className="main_about_second_sentence main_second_sentence_header">
              Cornerstone International College (CICCC) - December 2022
            </p>{" "}
            <span>Web development co-op diploma</span>
            <br />
          </div>
          <div className="main_about_second_sentence">
            <p className="main_about_second_sentence main_second_sentence_header">
              Tokai University - March 2018
            </p>
            <span>Bachelor of Political Science and Economics</span>
          </div>
        </div>
        <div className="main_about_photoes_container">
          <h2 className="main_about_h2">Myself</h2>
          <p className="main_about_third_sentence">
            I like playing tennis, taking photos, and outdoor activities. Those
            times make me feel good and refresh my mind.
          </p>
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
