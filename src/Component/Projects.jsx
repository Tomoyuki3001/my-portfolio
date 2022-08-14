import React from "react";
import { ProjectsStyle } from "../Style/Projects";

export default function Projects() {
  return (
    <ProjectsStyle>
      <div className="main_project_section">
        <div className="main_project_container">
          <div className="main_project_images">
            <img
              className="project_images"
              src={`${process.env.PUBLIC_URL}/images_project_sample.png`}
              alt=""
            />
          </div>
          <div class="main_project_detail_container">
            <h2>Projects</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
          </div>
        </div>
        <div class="main_project_container">
          <div class="main_project_images">
            <img
              className="project_images"
              src={`${process.env.PUBLIC_URL}/images_project_sample.png`}
              alt=""
            />
          </div>
          <div class="main_project_detail_container">
            <h2>Projects</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
          </div>
        </div>
        <div class="main_project_container">
          <div class="main_project_images">
            <img
              className="project_images"
              src={`${process.env.PUBLIC_URL}/images_project_sample.png`}
              alt=""
            />
          </div>
          <div class="main_project_detail_container">
            <h2>Projects</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
          </div>
        </div>
      </div>
    </ProjectsStyle>
  );
}
