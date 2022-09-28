import styled from "styled-components";

export const MainStyle = styled.div`
  .main_section {
    margin-left: 25%;
    width: 75%;
    height: 250rem;
    background-color: #e5e8ed;
  }
  @media (max-width: 360px) {
    .main_section {
      width: 100%;
      margin-left: 0%;
      height: 200rem;
    }
  }
`;
