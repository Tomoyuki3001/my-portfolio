import styled from "styled-components";

export const NavStyle = styled.div`
  .nav_section {
    background-color: #edeae5;
    position: fixed;
    height: 100%;
    width: 25%;
    text-align: center;
  }

  .nav_list_link {
    text-decoration: none;
  }

  .nav_footer_list {
    list-style: none;
    margin: 10% 0%;
  }

  .nav_section_h1 {
    margin: 20% 0% 30% 0%;
    font-size: 2em;
  }

  .nav_list_section {
    font-size: 1em;
    margin: 0% 0% 20% 0%;
  }

  .nav_footer {
    margin: 30% 0% 10% 0%;
  }

  .nav_footer_sentence {
    margin: 20% 5% 10% 5%;
  }

  .nav_footer_container {
    display: flex;
    justify-content: space-around;
    margin: 0% 10%;
  }
`;
