import React from "react";
import { NavStyle } from "../Style/Navbar";
import { Icon } from "@iconify/react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  return (
    <NavStyle>
      <div className="nav_section">
        <h1 className="nav_section_h1">
          Tomo<span>.</span>
        </h1>
        <nav>
          <ul className="nav_list_section">
            <li className="nav_footer_list">
              <AnchorLink href="#top" offset="40" className="nav_inside_link">
                TOP
              </AnchorLink>
            </li>
            <li className="nav_footer_list">
              <AnchorLink
                href="#aboutme"
                offset="40"
                className="nav_inside_link"
              >
                ABOUT ME
              </AnchorLink>
            </li>
            <li className="nav_footer_list">
              <AnchorLink
                href="#projects"
                offset="40"
                className="nav_inside_link"
              >
                PROJECTS
              </AnchorLink>
            </li>
            <li className="nav_footer_list">
              <AnchorLink
                href="#contact"
                offset="40"
                className="nav_inside_link"
              >
                CONTACT
              </AnchorLink>
            </li>
          </ul>
        </nav>
        <div class="nav_footer">
          <p className="nav_footer_sentence">
            These are my social media links. <br /> Please click and check each
            contents!
          </p>
          <ul className="nav_footer_container">
            <li className="nav_footer_list">
              <Icon
                icon="akar-icons:twitter-fill"
                color="#edeae5"
                height="30"
              />
            </li>
            <li className="nav_footer_list">
              <Icon icon="akar-icons:github-fill" color="#edeae5" height="30" />
            </li>
            <li className="nav_footer_list">
              <Icon
                icon="akar-icons:linkedin-box-fill"
                color="#edeae5"
                height="30"
              />
            </li>
          </ul>
        </div>
      </div>
    </NavStyle>
  );
}
