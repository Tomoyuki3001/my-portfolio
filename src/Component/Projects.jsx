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
          <div className="main_project_detail_container">
            <h2 className="main_project_h2">The matching game</h2>
            <p className="main_project_sentence">
              Memory card is a simple matching cards game in which all the cards
              are flipped backside on a surface, and two cards are flipped face
              up over each turn. The objective of this game is to match all the
              pairs of cards.
            </p>
            <p className="main_project_sentence">
              Technical Specifications: HTML/CSS/JavaScript
            </p>
            <span className="main_project_sentence">
              <a
                href="https://github.com/Tomoyuki3001/finalgame"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <span> / </span>
              <a
                href="https://tomoyuki3001.github.io/finalgame/"
                target="_blank"
                rel="noreferrer"
              >
                Go to the page
              </a>
            </span>
          </div>
        </div>
        <div className="main_project_container">
          <div className="main_project_images">
            <img
              className="project_images"
              src={`${process.env.PUBLIC_URL}/image_tracker.png`}
              alt=""
            />
          </div>
          <div className="main_project_detail_container">
            <h2 className="main_project_h2">The bank tracker app</h2>
            <p className="main_project_sentence">
              An expense tracker app allows you to track and categorize your
              spending. Your financial health will improve by keeping a daily
              record of your expenses by keeping track of receipts, bills, and
              other outgoing costs.(Mobile size is still making)
            </p>
            <p className="main_project_sentence">
              Technical Specifications: HTML/CSS/SCSS/JavaScript/React/Node.js
            </p>
            <span className="main_project_sentence">
              <a
                href="https://github.com/Tomoyuki3001/my-trakr-react"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <span> / </span>
              <a
                href="https://my-tracker-1130.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Go to the page
              </a>
            </span>
          </div>
        </div>
        <div className="main_project_container">
          <div className="main_project_images">
            <img
              className="project_images"
              src={`${process.env.PUBLIC_URL}/image_twoot.png`}
              alt=""
            />
          </div>
          <div className="main_project_detail_container">
            <h2 className="main_project_h2">The twoot app</h2>
            <p className="main_project_sentence">
              Like Twitter, you can create accounts and posts and remember them,
              with a limit of 140 characters, and you can see when a post was
              created in the past.
            </p>
            <p className="main_project_sentence">
              Technical Specifications: HTML/CSS/SCSS/JavaScript/React/Node.js
            </p>
            <span className="main_project_sentence">
              <a
                href="https://github.com/Tomoyuki3001/mid-term-twootr"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <span> / </span>
              <a
                href="https://twoot01.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Go to the page
              </a>
            </span>
          </div>
        </div>
        <div className="main_project_container">
          <div className="main_project_images">
            <img
              className="project_images"
              src={`${process.env.PUBLIC_URL}/image_project_countries.png`}
              alt=""
            />
          </div>
          <div className="main_project_detail_container">
            <h2 className="main_project_h2">The country guide app</h2>
            <p className="main_project_sentence">
              This app consists of a search bar. The user enters the name of the
              country to be searched for in this input field and clicks on the
              search button. On hitting search, we display a list of common
              information about that country including an image of the country’s
              flag.
            </p>
            <p className="main_project_sentence">
              Technical Specifications: HTML/CSS/SCSS/JavaScript
            </p>
            <span className="main_project_sentence">
              <a
                href="https://github.com/Tomoyuki3001/final-project-webdev1-boilerplate"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <span> / </span>
              <a
                href="https://final-web-assignments.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Go to the page
              </a>
            </span>
          </div>
        </div>
      </div>
    </ProjectsStyle>
  );
}
