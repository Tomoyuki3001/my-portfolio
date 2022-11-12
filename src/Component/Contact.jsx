import React from "react";
import { ContactStyle } from "../Style/Contanct";
import MailForm from "./MailForm";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <ContactStyle>
      <div className="contact_container" id="contact">
        <div className="main_contact_section">
          <div className="main_contact_container">
            <div className="main_contact_header">
              <h2 className="main_contact_header_h2">Contact information</h2>
            </div>
            <div className="main_contact_address_part">
              <p>
                <span>Address : </span>Vancouver B.C. Canada
              </p>
            </div>
            <div className="main_contact_address_part">
              <p>
                <span>Phone : </span>(236) 838 - 7694
              </p>
            </div>
            <div className="main_contact_address_part">
              <p>
                <span>Email : </span>mjr01300828@gmail.com
              </p>
            </div>
            <div className="main_contact_address_part">
              <p>
                <span>Website : </span>{" "}
                <a href="https://github.com/Tomoyuki3001">GitHub</a>
              </p>
            </div>
          </div>
        </div>
        <MailForm />
        <div class="nav_footer">
          <ul className="nav_footer_container">
            <li className="nav_footer_list">
              <a href="https://twitter.com/yk_english_jp" target="_blank">
                <Icon
                  icon="akar-icons:twitter-fill"
                  color="#edeae5"
                  className="nav_icon"
                />
              </a>
            </li>
            <li className="nav_footer_list">
              <a href="https://github.com/Tomoyuki3001" target="_blank">
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
    </ContactStyle>
  );
}
