import styled from "styled-components";

export const ProjectsStyle = styled.div`
  @media (min-width: 361px) {
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

  .main_project_section {
    height: 85rem;
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
`;
