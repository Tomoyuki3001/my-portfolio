import React from "react";
import { FooterStyle } from "../Style/Footer";
export default function Footer() {
  return (
    <FooterStyle>
      <div class="main_footer_section">
        <div class="col-md">
          <div class="ftco-footer-widget mb-4 ml-md-4">
            <h2 class="ftco-heading-2">Category</h2>
            <ul class="list-unstyled categories">
              <li class="footer_list">
                <a class="footer_list_link" href="#">
                  Home
                </a>
              </li>
              <li class="footer_list">
                <a class="footer_list_link" href="#">
                  Projects
                </a>
              </li>
              <li class="footer_list">
                <a class="footer_list_link" href="#">
                  About me
                </a>
              </li>
              <li class="footer_list">
                <a class="footer_list_link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Archives</h2>
            <ul class="list-unstyled categories">
              <li class="footer_list">
                <a href="#">
                  October 2018 <span>(6)</span>
                </a>
              </li>
              <li class="footer_list">
                <a class="footer_list_link" href="#">
                  September 2018 <span>(6)</span>
                </a>
              </li>
              <li class="footer_list">
                <a class="footer_list_link" href="#">
                  August 2018 <span>(8)</span>
                </a>
              </li>
              <li class="footer_list">
                <a class="footer_list_link" href="#">
                  July 2018 <span>(2)</span>
                </a>
              </li>
              <li class="footer_list">
                <a class="footer_list_link" href="#">
                  June 2018 <span>(7)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md">
          <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2">Have a Questions?</h2>
            <div class="block-23 mb-3">
              <ul>
                <li class="footer_list">
                  <a class="footer_list_link" href="#">
                    <span class="icon icon-phone"></span>
                    <span class="text">Adress</span>
                  </a>
                </li>
                <li class="footer_list">
                  <a class="footer_list_link" href="#">
                    <span class="icon icon-phone"></span>
                    <span class="text">Phone number</span>
                  </a>
                </li>
                <li class="footer_list">
                  <a class="footer_list_link" href="#">
                    <span class="icon icon-envelope"></span>
                    <span class="text">E-mail</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
