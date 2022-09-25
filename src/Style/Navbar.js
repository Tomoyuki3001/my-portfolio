import styled from "styled-components";

export const NavStyle = styled.div`
  .nav_section {
    background-color: #a0bdcc;
    position: fixed;
    height: 100%;
    width: 25%;
    text-align: center;
  }

  .nav_inside_link {
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    position: relative;
  }

  .nav_inside_link:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #303033;
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  .nav_inside_link:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  .nav_footer_list {
    list-style: none;
    margin: 5% 0%;
  }

  .nav_section_h1 {
    margin: 20% 0% 20% 0%;
    font-size: 2.5em;
  }

  .nav_list_section {
    font-size: 1.5em;
    margin: 0% 0% 5% 0%;
  }

  .nav_footer {
    margin: 30% 0% 10% 0%;
  }

  .nav_footer_sentence {
    margin: 5% 5% 5% 5%;
    font-size: 1.2rem;
  }

  .nav_footer_container {
    display: flex;
    justify-content: space-around;
    margin: 0% 10%;
  }
`;
