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
              src={`${process.env.PUBLIC_URL}/images_project_sample.png`}
              alt=""
            />
          </div>
          <div class="main_project_detail_container">
            <h2 className="main_project_h2">Projects name</h2>
            <p className="main_project_sentence">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
            <p className="main_project_sentence">Usage :</p>
            <a href="#">Git Hub</a> <br />
            <a href="#">Go page</a>
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
            <h2 className="main_project_h2">Projects name</h2>
            <p className="main_project_sentence">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
            <p className="main_project_sentence">Usage :</p>
            <a href="#">Git Hub</a> <br />
            <a href="#">Go page</a>
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
            <h2 className="main_project_h2">Projects name</h2>
            <p className="main_project_sentence">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
            <p className="main_project_sentence">Usage :</p>
            <a href="#">Git Hub</a> <br />
            <a href="#">Go page</a>
          </div>
        </div>
      </div>
    </ProjectsStyle>
  );
}
