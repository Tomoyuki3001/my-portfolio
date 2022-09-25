import React from "react";
import { ContactStyle } from "../Style/Contanct";
import MailForm from "./MailForm";

export default function Contact() {
  return (
    <ContactStyle>
      <div className="contact_container" id="contact">
        <div className="main_contact_section">
          <div className="main_contact_container">
            <div className="main_contact_header">
              <h2 className="main_contact_header_h2">Contact Information</h2>
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
                <a href="https://github.com/Tomoyuki3001">Git Hub</a>
              </p>
            </div>
          </div>
        </div>
        <MailForm />
      </div>
    </ContactStyle>
  );
}
