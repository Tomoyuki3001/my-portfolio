import styled from "styled-components";

export const ProjectsStyle = styled.div`
  @media (max-width: 600px) {
    .main_project_section {
      height: 95rem;
      padding: 0%;
      margin-top: 0%;
    }
    .main_project_container {
      padding: 0% 10%;
      margin: 15% 0% 0% 0%;
    }

    .project_images {
      width: 100%;
    }
  }

  @media (min-width: 601px) {
    .main_project_section {
      height: 50rem;
      background-color: #e5e8ed;
      padding: 0% 10%;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
    }

    .main_project_container {
      display: flex;
    }

    .main_project_images {
      width: 40%;
      height: auto;
    }

    .project_images {
      width: 100%;
    }

    .main_project_detail_container {
      width: 60%;
      padding-left: 5%;
    }

    .main_project_h2 {
      font-size: 1.2rem;
    }

    .main_project_sentence {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 1020px) {
    .main_project_section {
      height: 70rem;
      background-color: #e5e8ed;
      padding: 0% 10%;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      margin-top: 5%;
    }

    .main_project_container {
      display: flex;
    }

    .main_project_images {
      width: 40%;
      height: auto;
    }

    .project_images {
      width: 100%;
    }

    .main_project_detail_container {
      width: 60%;
      padding-left: 5%;
    }

    .main_project_h2 {
      font-size: 2em;
    }

    .main_project_sentence {
      font-size: 1.3em;
    }
  }
`;
