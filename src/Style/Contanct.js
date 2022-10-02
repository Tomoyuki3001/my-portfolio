import styled from "styled-components";

export const ContactStyle = styled.div`
  @media (min-width: 402px) {
    .contact_container {
      display: flex;
      background-color: #e5e8ed;
      padding: 0% 10% 0% 10%;
      margin-top: 10%;
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

  @media (max-width: 401px) {
    .contact_container {
      padding: 0% 10%;
      margin-top: 30%;
    }

    .main_contact_header_h2 {
      font-size: 2em;
      margin: 10% 0%;
    }
  }
`;
