import styled from "styled-components";

export const ContactStyle = styled.div`
  @media (max-width: 600px) {
    .contact_container {
      padding: 20% 10%;
    }

    main_contact_section {
      padding: 0% 0% 10% 0%;
    }

    .main_contact_header_h2 {
      font-size: 20px;
    }

    .mobile_footer_container {
      display: flex;
      justify-content: space-around;
      padding: 10% 0%;
    }

    .mobile_footer_list {
      list-style: none;
      width: 30%;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }

    .mobile_nav_icon {
      width: 30px;
      height: 30px;
    }
  }

  @media (min-width: 601px) and (max-width: 1019px) {
    .main_contact_address {
      padding: 0% 5%;
      width: 40%;
      height: 30%;
    }
    .main_contact_section {
      display: flex;
    }

    .main_contact_header_h2 {
      font-size: 25px;
      margin: 10% 0% 5% 0%;
    }

    .main_contact_address_part {
      font-size: 20px;
      margin-top: 2rem;
    }

    .mobile_footer_container {
      display: flex;
      justify-content: space-around;
      margin: 20% 0% 10% 0%;
    }

    .mobile_footer_list {
      list-style: none;
      width: 30%;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }

    .mobile_icon {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (min-width: 1020px) {
    .contact_container {
      margin: 0% 5% 10% 5%;
    }
    .main_contact_address {
      padding: 5% 10%;
      width: 40%;
      height: 30%;
    }
    .main_contact_section {
      display: flex;
    }

    .main_contact_header_h2 {
      font-size: 40px;
      margin: 10% 0% 5% 0%;
    }

    .main_contact_address_part {
      font-size: 30px;
      margin-top: 2rem;
    }

    .mobile_footer {
      display: none;
    }
  }
`;
