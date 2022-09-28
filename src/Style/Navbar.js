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

  .nav_footer_container {
    display: flex;
    justify-content: space-around;
    margin: 0% 10%;
  }

  @media (max-width: 400px) {
    .nav_section {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 7%;
      width: 100%;
    }

    .nav_section_h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0%;
      height: 100%;
      font-size: 0.5rem;
      width: 15%;
    }

    .nav_list_container {
      display: flex;
      font-size: 0.4rem;
      margin: 0% 0% 0% 5%;
      width: 65%;
      height: 100%;
    }

    .nav_list_section {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0%;
      width: 100%;
    }

    .nav_footer {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0%;
      width: 20%;
      height: 100%;
    }

    .nav_footer_list {
      list-style: none;
      margin: 0% 7% 0% 0%;
    }

    .nav_icon {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
`;
