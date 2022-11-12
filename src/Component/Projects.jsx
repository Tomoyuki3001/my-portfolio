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
              src={`${process.env.PUBLIC_URL}/image_project_cloned.png`}
              alt=""
            />
          </div>
          <div class="main_project_detail_container">
            <h2 className="main_project_h2">The cloend website</h2>
            <p className="main_project_sentence">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
            <p className="main_project_sentence">Usage : HTML/CSS/SCSS</p>
            <span className="main_project_sentence">
              <a
                href="https://github.com/Tomoyuki3001/cloning_websites"
                target="_blank"
              >
                GitHub
              </a>
              <span> / </span>
              <a
                href="https://tomoyuki3001.github.io/cloning_websites/"
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
              <a href="https://github.com/Tomoyuki3001/weatherapp_midterm">
                GitHub
              </a>
              <span> / </span>
              <a href="https://tomoyuki3001.github.io/weatherapp_midterm/">
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
              <a href="https://github.com/Tomoyuki3001/weatherapp_midterm">
                GitHub
              </a>
              <span> / </span>
              <a href="https://tomoyuki3001.github.io/weatherapp_midterm/">
                Go page
              </a>
            </span>
          </div>
        </div>
      </div>
    </ProjectsStyle>
  );
}
