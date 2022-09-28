import styled from "styled-components";

export const AboutMeStyle = styled.div`
  .main_aboutme_section {
    height: 55rem;
    background-color: #e5e8ed;
    padding: 0% 10%;
    margin-top: 2%;
  }

  // First container

  .main_about_learn_container,
  .main_about_career_container,
  .main_about_photoes_container {
    padding: 5% 0%;
  }

  .main_about_h2 {
    display: flex;
    align-items: center;
    font-size: 2em;
  }

  .main_abount_sentence,
  .main_about_second_sentence,
  .main_about_third_sentence {
    font-size: 1.5em;
    padding-left: 3%;
  }

  .main_about_h2:after {
    border-top: 2px solid;
    content: "";
    width: 10em;
    margin-left: 1em;
  }

  .main_about_icons {
    display: flex;
  }

  .main_about_icon {
    margin: 0% 3%;
  }

  // Second container

  .main_about_career_container {
    padding-left: 10%;
  }

  .main_about_second:after {
    border-top: 2px solid;
    content: "";
    width: 10em;
    margin-left: 1em;
  }

  // Third container

  .main_about_photoes_container {
    padding-left: 20%;
  }

  .main_about_third:after {
    border-top: 2px solid;
    content: "";
    width: 10em;
    margin-left: 1em;
  }

  .main_about_third_button {
    cursor: pointer;
    width: 11rem;
    padding: 0.2rem 1rem;
    position: relative;
    overflow: hidden;
    border: 0;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background-color: #e5e8ed;
    color: #343a40;
    border: 2px solid #343a40;
    font-size: 0.8rem;
  }

  .main_about_third_button:hover {
    color: #ffffff;
    background-color: #343a40;
    border: 2px solid #ffffff;
  }

  @media (max-width: 360px) {
    .main_aboutme_section {
      height: 39rem;
      padding: 0% 10%;
      margin-top: 10%;
    }

    .main_about_icons {
      display: flex;
      width: 1em;
    }

    .main_abount_sentence,
    .main_about_second_sentence,
    .main_about_third_sentence {
      font-size: 1rem;
      padding-left: 0%;
    }

    .main_about_h2 {
      font-size: 1em;
    }

    .main_about_career_container {
      padding-left: 0%;
    }

    .main_about_photoes_container {
      padding-left: 0%;
    }

    .main_about_h2:after {
      border-top: 2px solid;
      content: "";
      width: 15rem;
      margin-left: 1em;
    }

    .main_about_icon {
      margin: 0%;
      width: 2.5rem;
    }

    .main_icon {
      width: 4rem;
    }

    .main_about_button_container {
      margin-top: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
