import styled from "styled-components";

export const IntroduceStyle = styled.div`
  @media (max-width: 600px) {
    .main_introduce_sentence_section {
      padding: 15% 7.5%;
      text-align: center;
      background-image: url(https://images.pexels.com/photos/5326965/pexels-photo-5326965.jpeg);
      background-size: cover;
    }

    .main_self_introduce_container {
      text-align: center;
    }
    .main_self_introduce_image {
      border-radius: 50%;
      width: 50%;
      height: 50%;
      margin: 10% 0% 5% 0%;
    }
    .main_self_introduce_name_h2 {
      font-size: 20px;
      text-shadow: 2px 2px 5px #ffffff;
      margin: 0%;
    }

    .main_self_introduce_name_h1 {
      font-size: 30px;
      text-shadow: 2px 2px 5px #ffffff;
      margin: 0%;
      margin: 0% 0% 5% 0%;
    }

    .main_self_introduce_sentence {
      font-size: 16px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }

  @media (min-width: 601px) and (max-width: 1019px) {
    .main_introduce_sentence_section {
      padding: 12.5% 5%;
      text-align: center;
      background-image: url(https://images.pexels.com/photos/5326965/pexels-photo-5326965.jpeg);
      background-size: cover;
    }

    .main_self_introduce_image {
      border-radius: 50%;
      width: 30%;
      height: 30%;
    }
    .main_self_introduce_name {
      margin-bottom: 3%;
    }

    .main_self_introduce_name_h2 {
      font-size: 1.8rem;
      margin-top: 2%;
    }

    .main_self_introduce_name_h1 {
      font-size: 3rem;
      margin-top: 2%;
    }

    .main_self_introduce_sentence {
      font-size: 22px;
    }
  }

  @media (min-width: 1020px) {
    .main_introduce_sentence_section {
      padding: 5% 0%;
      text-align: center;
      background-image: url(https://wallpaperaccess.com/full/2722365.jpg);
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    }

    .main_self_introduce_image {
      border-radius: 50%;
      width: 25%;
      height: 25%;
    }
    .main_self_introduce_name {
      margin-bottom: 3%;
    }

    .main_self_introduce_name_h2 {
      font-size: 2rem;
      margin-top: 5%;
    }

    .main_self_introduce_name_h1 {
      font-size: 3.5rem;
      margin-top: 0%;
    }

    .main_self_introduce_sentence {
      font-size: 2rem;
    }
  }
`;
