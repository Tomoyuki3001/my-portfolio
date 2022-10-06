import styled from "styled-components";

export const MainStyle = styled.div`
  @media (max-width: 600px) {
    .main_section {
      width: 100%;
      margin-left: 0%;
      height: 220rem;
      background-color: #e5e8ed;
    }
  }

  @media (min-width: 601px) {
    .main_section {
      margin-left: 20%;
      width: 80%;
      height: 170rem;
      background-color: #e5e8ed;
    }
  }

  @media (min-width: 1020px) {
    .main_section {
      margin-left: 25%;
      width: 75%;
      height: 230rem;
      background-color: #e5e8ed;
    }
  }
`;
