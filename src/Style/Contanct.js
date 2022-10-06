import styled from "styled-components";

export const ContactStyle = styled.div`
  @media (max-width: 600px) {
    .contact_container {
      padding: 0% 10%;
      height: 30rem;
      margin-top: 10%;
    }

    .main_contact_header_h2 {
      font-size: 2rem;
    }
  }

  @media (min-width: 601px) {
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
  }
`;
