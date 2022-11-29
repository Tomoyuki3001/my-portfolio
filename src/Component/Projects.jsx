import React from "react";
import { ProjectsStyle } from "../Style/Projects";

export default function Projects() {
  return (
    <ProjectsStyle>
      <div className="main_project_section" id="projects">
        <div className="main_project_container">
          <div className="main_project_images">
            <img
              className="project_images"
              src={`${process.env.PUBLIC_URL}/image_project_trump.png`}
              alt=""
            />
          </div>
          <div class="main_project_detail_container">
            <h2 className="main_project_h2">The trump game</h2>
            <p className="main_project_sentence">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
            <p className="main_project_sentence">Usage : HTML/CSS</p>
            <span className="main_project_sentence">
              <a
                href="https://github.com/Tomoyuki3001/finalgame"
                target="_blank"
              >
                GitHub
              </a>
              <span> / </span>
              <a
                href="https://tomoyuki3001.github.io/finalgame/"
                target="_blank"
              >
                Go page
              </a>
            </span>
          </div>
        </div>
        <div class="main_project_container">
          <div class="main_project_images">
            <img
              className="project_images"
              src={`${process.env.PUBLIC_URL}/image_project_countries.png`}
              alt=""
            />
          </div>
          <div class="main_project_detail_container">
            <h2 className="main_project_h2">The searching countries</h2>
            <p className="main_project_sentence">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
            <p className="main_project_sentence">Usage : HTML/CSS/SCSS</p>
            <span className="main_project_sentence">
              <a
                href="https://github.com/Tomoyuki3001/final-project-webdev1-boilerplate"
                target="_blank"
              >
                GitHub
              </a>
              <span> / </span>
              <a
                href="https://final-web-assignments.herokuapp.com/"
                target="_blank"
              >
                Go page
              </a>
            </span>
          </div>
        </div>
        <div class="main_project_container">
          <div class="main_project_images">
            <img
              className="project_images"
              src={`${process.env.PUBLIC_URL}/image_tracker.png`}
              alt=""
            />
          </div>
          <div class="main_project_detail_container">
            <h2 className="main_project_h2">The tracker app</h2>
            <p className="main_project_sentence">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
            <p className="main_project_sentence">
              Usage : HTML/CSS/SCSS/JavaScript/React/Node.js
            </p>
            <span className="main_project_sentence">
              <a
                href="https://github.com/Tomoyuki3001/my-trakr-react"
                target="_blank"
              >
                GitHub
              </a>
              <span> / </span>
              <a href="https://my-tracker-1130.herokuapp.com/" target="_blank">
                Go page
              </a>
            </span>
          </div>
        </div>
        <div class="main_project_container">
          <div class="main_project_images">
            <img
              className="project_images"
              src={`${process.env.PUBLIC_URL}/image_twoot.png`}
              alt=""
            />
          </div>
          <div class="main_project_detail_container">
            <h2 className="main_project_h2">The twoot app</h2>
            <p className="main_project_sentence">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
            <p className="main_project_sentence">
              Usage : HTML/CSS/SCSS/JavaScript/React/Node.js
            </p>
            <span className="main_project_sentence">
              <a
                href="https://github.com/Tomoyuki3001/mid-term-twootr"
                target="_blank"
              >
                GitHub
              </a>
              <span> / </span>
              <a href="https://twoot01.herokuapp.com/" target="_blank">
                Go page
              </a>
            </span>
          </div>
        </div>
        <div class="main_project_container">
          <div class="main_project_images">
            <img
              className="project_images"
              src={`${process.env.PUBLIC_URL}/image_project_wheather.png`}
              alt=""
            />
          </div>
          <div class="main_project_detail_container">
            <h2 className="main_project_h2">The wheather app</h2>
            <p className="main_project_sentence">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
            <p className="main_project_sentence">
              Usage : HTML/CSS/SCSS/JavaScript
            </p>
            <span className="main_project_sentence">
              <a
                href="https://github.com/Tomoyuki3001/weatherapp_midterm"
                target="_blank"
              >
                GitHub
              </a>
              <span> / </span>
              <a
                href="https://tomoyuki3001.github.io/weatherapp_midterm/"
                target="_blank"
              >
                Go page
              </a>
            </span>
          </div>
        </div>
      </div>
    </ProjectsStyle>
  );
}
