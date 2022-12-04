import React from "react";
import { IntroduceStyle } from "../Style/Introduce";

export default function Introduce() {
  return (
    <IntroduceStyle>
      <div className="main_introduce_sentence_section">
        <div className="main_self_introduce_container">
          <img
            className="main_self_introduce_image"
            src={`${process.env.PUBLIC_URL}/image_profile_picture_sq.JPG`}
            alt="Profile"
          />
          <div className="main_self_introduce_name">
            <h2 className="main_self_introduce_name_h2">Hello I am</h2>
            <h1 className="main_self_introduce_name_h1">Tomoyuki Fujii</h1>
          </div>
          <span className="main_self_introduce_sentence">
            I’m a junior front-end developer based in Vancouver. <br /> I have
            over one year’s experience in front-end development with React.
          </span>
        </div>
      </div>
    </IntroduceStyle>
  );
}
