import styled from "styled-components";

export const AboutMeStyle = styled.div`
  @media (max-width: 600px) {
    .main_aboutme_section {
      padding: 10% 10% 0% 10%;
    }

    .main_about_learn_container,
    .main_about_career_container,
    .main_about_photoes_container {
      padding: 5% 0%;
      text-align: center;
    }
    .main_about_icons {
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding: 0% 0% 10% 0%;
    }

    .main_icon {
      width: 1.5rem;
      height: 1.5rem;
    }

    .main_abount_sentence,
    .main_about_second_sentence,
    .main_about_third_sentence {
      font-size: 16px;
      margin: 2.5% 0% 0% 0%;
    }

    .main_about_h2 {
      font-size: 25px;
      border-bottom: solid 2px #343a40;
      display: inline-block;
    }

    .main_about_button_container {
      margin-top: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main_about_third_button,
    .main_about_resume_button {
      padding: 10px 10px;
      position: relative;
      overflow: hidden;
      border: 0;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background-color: #e5e8ed;
      color: #343a40;
      border: 2px solid #343a40;
      font-size: 16px;
    }

    .main_about_resume_link {
      text-decoration: none;
    }
  }

  @media (min-width: 601px) and (max-width: 1019px) {
    .main_aboutme_section {
      padding: 2.5% 15%;
    }

    .main_about_learn_container,
    .main_about_career_container,
    .main_about_photoes_container {
      padding: 5% 0%;
      text-align: center;
    }

    .main_about_h2 {
      font-size: 25px;
      border-bottom: solid 2px #343a40;
      display: inline-block;
    }

    .main_abount_sentence,
    .main_about_second_sentence,
    .main_about_third_sentence {
      font-size: 22px;
      margin: 2.5% 0% 0% 0%;
    }

    .main_about_icons {
      display: flex;
    }

    .main_about_icon {
      margin: 3% 3% 0% 3%;
    }

    .main_icon {
      width: 2rem;
      height: 2rem;
    }

    .main_about_third_button {
      margin-top: 5%;
      cursor: pointer;
      width: 15rem;
      padding: 0.5rem 0.5rem;
      position: relative;
      overflow: hidden;
      border: 0;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background-color: #e5e8ed;
      color: #343a40;
      border: 2px solid #343a40;
      font-size: 15px;
    }

    .main_about_third_button:hover {
      color: #ffffff;
      background-color: #343a40;
      border: 2px solid #ffffff;
    }
  }

  @media (min-width: 1020px) {
    .main_aboutme_section {
      padding: 5% 0%;
    }

    .main_about_learn_container,
    .main_about_career_container,
    .main_about_photoes_container {
      padding: 2.5% 10%;
      text-align: center;
      font-size: 20px;
    }

    .main_about_h2 {
      font-size: 35px;
      border-bottom: solid 3px #343a40;
      display: inline-block;
    }

    .main_about_sentence,
    .main_about_second_sentence,
    .main_about_third_sentence {
      margin: 2.5% 0% 0% 0%;
      font-size: 30px;
    }

    .main_second_sentence_header {
      font-weight: bold;
      font-size: 32px;
    }

    .main_about_icons {
      display: flex;
      justify-content: center;
    }

    .main_about_icon {
      margin: 3% 3% 0% 3%;
    }

    .main_icon {
      width: 4rem;
      height: 4rem;
    }

    .main_about_resume_button {
      margin: 5% 0%;
      cursor: pointer;
      width: 20rem;
      padding: 1rem;
      overflow: hidden;
      border: 0;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background-color: #e5e8ed;
      color: #343a40;
      border: 2px solid #343a40;
      font-size: 20px;
    }

    .main_about_resume_button:hover {
      background-color: rgb(52, 58, 64, 0.3);
    }

    .main_about_resume_link {
      text-decoration: none;
    }

    .main_about_third_button {
      margin: 5% 0%;
      cursor: pointer;
      width: 15rem;
      padding: 1rem;
      overflow: hidden;
      border: 0;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background-color: #e5e8ed;
      color: #343a40;
      border: 2px solid #343a40;
      font-size: 20px;
    }

    .main_about_third_button:hover {
      color: #ffffff;
      background-color: #343a40;
      border: 2px solid #ffffff;
    }
  }
`;
