import styled from "styled-components";

export const IntroduceStyle = styled.div`
  .main_introduce_sentence_section {
    padding: 5% 0%;
    text-align: center;
    height: 47rem;
    background-image: url(https://wallpaperaccess.com/full/2722365.jpg);
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  .main_self_introduce_image {
    border-radius: 50%;
    width: 20%;
    height: 20%;
  }
  .main_self_introduce_name {
    margin-bottom: 3%;
  }

  .main_self_introduce_name_h2 {
    font-size: 2em;
    margin-top: 2%;
  }

  .main_self_introduce_name_h1 {
    font-size: 3.5em;
    margin-top: 2%;
  }

  .main_self_introduce_sentence {
    padding: 0% 20%;
    font-size: 2em;
  }

  @media (max-width: 360px) {
    .main_introduce_sentence_section {
      padding: 20% 0% 0% 0%;
      text-align: center;
      height: 25rem;
    }
    .main_self_introduce_image {
      border-radius: 50%;
      width: 30%;
      height: 30%;
    }
    .main_self_introduce_name_h2 {
      font-size: 1.5rem;
      margin-top: 2%;
    }

    .main_self_introduce_name_h1 {
      font-size: 2rem;
      margin-top: 1%;
    }

    .main_self_introduce_sentence {
      padding: 0%;
      font-size: 1rem;
      margin-top: 7%;
    }
  }
`;
