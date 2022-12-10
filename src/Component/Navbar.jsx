import React from "react";
import { NavStyle } from "../Style/Navbar";
import { Icon } from "@iconify/react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  return (
    <NavStyle>
      <div className="nav_section">
        <div className="nav_list_container">
          <div className="nav_section_h1">
            <h1>
              <AnchorLink href="#top" offset="40" className="nav_top_header">
                Tomo's <br />
                portfolio
              </AnchorLink>
            </h1>
          </div>
          <ul className="nav_list_section">
            <li className="nav_footer_list nav_link">
              <AnchorLink
                href="#aboutme"
                offset="40"
                className="nav_inside_link"
              >
                ABOUT ME
              </AnchorLink>
            </li>
            <li className="nav_footer_list nav_link">
              <AnchorLink
                href="#projects"
                offset="40"
                className="nav_inside_link"
              >
                PROJECTS
              </AnchorLink>
            </li>
            <li className="nav_footer_list nav_link">
              <AnchorLink
                href="#contact"
                offset="40"
                className="nav_inside_link"
              >
                CONTACT
              </AnchorLink>
            </li>
          </ul>
          <button className="nav_about_resume_button">
            <a
              className="nav_about_resume_link"
              href={`${process.env.PUBLIC_URL}/TomoyukiFujii.pdf`}
              download="TomoyukiFujii.pdf"
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="nav_footer">
          <ul className="nav_footer_container">
            <li className="nav_footer_list">
              <a
                href="https://twitter.com/yk_english_jp"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  icon="akar-icons:twitter-fill"
                  color="#edeae5"
                  className="nav_icon"
                />
              </a>
            </li>
            <li className="nav_footer_list">
              <a
                href="https://github.com/Tomoyuki3001"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  icon="akar-icons:github-fill"
                  color="#edeae5"
                  className="nav_icon"
                />
              </a>
            </li>
            <li className="nav_footer_list">
              <a
                href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  icon="akar-icons:linkedin-box-fill"
                  color="#edeae5"
                  className="nav_icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </NavStyle>
  );
}
