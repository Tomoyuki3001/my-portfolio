import styled from "styled-components";

export const ContactStyle = styled.div`
  @media (max-width: 600px) {
    .contact_container {
      padding: 0% 10%;
      margin-top: 10%;
    }

    .main_contact_header_h2 {
      font-size: 20px;
    }

    .nav_footer_container {
      display: flex;
      justify-content: space-around;
      margin: 20% 0% 10% 0%;
    }

    .nav_footer_list {
      list-style: none;
      width: 30%;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }

    .nav_icon {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (min-width: 601px) and (max-width: 1019px) {
    .contact_container {
      display: flex;
      padding: 0% 5% 0% 5%;
    }
    .main_contact_section {
      width: 40%;
      height: 30%;
    }

    .main_contact_header_h2 {
      font-size: 1.2rem;
      margin: 10% 0% 5% 0%;
    }

    .main_contact_address_part {
      font-size: 0.8rem;
      margin-top: 2rem;
    }

    .nav_footer {
      display: none;
    }
  }

  @media (min-width: 1020px) {
    .contact_container {
      display: flex;
      padding: 5% 10%;
    }
    .main_contact_section {
      width: 40%;
      height: 30%;
    }

    .main_contact_header_h2 {
      font-size: 2em;
      margin: 10% 0% 5% 0%;
    }

    .main_contact_address_part {
      font-size: 1.5em;
      margin-top: 2rem;
    }

    .nav_footer {
      display: none;
    }
  }
`;
