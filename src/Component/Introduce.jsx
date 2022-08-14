import React from "react";
import { IntroduceStyle } from "../Style/Introduce";

export default function Introduce() {
  return (
    <IntroduceStyle>
      <div className="main_introduce_sentence_section">
        <div className="main_self_introduce_section">
          <div className="desc">
            <img
              className="main_self_introduce_image"
              src={`${process.env.PUBLIC_URL}/images_profile_intro.JPG`}
              alt="Profile"
            />
            <div className="main_self_introduce_name">
              <h2 className="main_self_introduce_name_h2">Hello I am</h2>
              <h1 className="main_self_introduce_name_h1">Tomoyuki Fujii</h1>
            </div>
            <p className="main_self_introduce_sentence">
              I am a student. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Quaerat aliquam inventore sed ipsam iure facere
              est laborum accusantium deserunt quos?
            </p>
          </div>
        </div>
      </div>
    </IntroduceStyle>
  );
}
