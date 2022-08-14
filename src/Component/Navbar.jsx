import React from "react";
import { NavStyle } from "../Style/Navbar";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <NavStyle>
      <div className="nav_section">
        <h1 className="nav_section_h1">
          <a className="nav_list_link" href="index.html">
            Tomo<span>.</span>
          </a>
        </h1>
        <nav>
          <ul className="nav_list_section">
            <li className="nav_footer_list">
              <a className="nav_list_link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav_footer_list">
              <a className="nav_list_link" href="about.html">
                Projects
              </a>
            </li>
            <li className="nav_footer_list">
              <a className="nav_list_link" href="contact.html">
                About me
              </a>
            </li>
            <li className="nav_footer_list">
              <a className="nav_list_link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div class="nav_footer">
          <p className="nav_footer_sentence">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            recusandae possimus! Quas assumenda velit, quaerat perferendis
            veniam culpa tenetur nam aliquid ex!
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
