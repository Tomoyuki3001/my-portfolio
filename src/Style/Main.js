import styled from "styled-components";

export const MainStyle = styled.div`
  @media (max-width: 600px) {
    .main_section {
      width: 100%;
      background-color: #e5e8ed;
    }
  }

  @media (min-width: 601px) and (max-width: 1019px) {
    .main_section {
      width: 100%;
      background-color: #e5e8ed;
    }
  }

  @media (min-width: 1021px) {
    .main_section {
      padding-left: 25%;
      width: 75%;
      background-color: #e5e8ed;
    }
  }
`;
