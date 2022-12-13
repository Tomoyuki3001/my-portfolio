import styled from "styled-components";

export const ModalStyle = styled.div`
  @media (max-width: 600px) {
    .modal {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.4s ease-in-out;
      pointer-events: none;
    }

    .modal.show {
      opacity: 1;
      pointer-events: visible;
    }

    .modal-content {
      width: 30rem;
      background-color: rgba(245, 245, 245, 0.8);
      transition: all 0.4s ease-in-out;
      transform: translateY(-200px);
      text-align: center;
    }

    .modal.show .modal-content {
      transform: translateY(0);
    }

    .modal.exit .modal-content {
      transform: translateY(-200px);
    }

    .modal-header,
    .modal-footer {
      padding: 1rem;
    }

    .modal-title {
      margin: 0%;
      font-size: 1.5rem;
    }

    .modal-body {
      padding: 0% 2.5%;
    }

    .image_box {
      width: 350px;
      display: block;
    }

    .modal-body-favorite-photoes {
      width: 33%;
    }

    .favorite_image {
      display: flex;
      margin: 0%;
    }

    .image_box {
      width: 100%;
      text-decoration: none;
    }

    .modal_image {
      width: 40%;
      height: 40%;
    }

    .modal-body-favorite-photoes {
      width: 100%;
    }

    .favorite_h1 {
      font-size: 20px;
      margin: 0%;
    }
    .favorite_p {
      font-size: 16px;
      margin: 0%;
      padding-left: 10%;
    }
    .button {
      cursor: pointer;
      width: 10rem;
      padding: 0.2rem 2.5rem;
      font-size: 0.8rem;
      position: relative;
      overflow: hidden;
      border: 0;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background-color: #e5e8ed;
      color: #343a40;
      border: 2px solid #343a40;
    }
    .button:hover {
      color: #ffffff;
      background-color: #343a40;
      border: 2px solid #ffffff;
    }
  }

  @media (min-width: 601px) and (max-width: 1019px) {
    .modal {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.4s ease-in-out;
      pointer-events: none;
    }

    .modal.show {
      opacity: 1;
      pointer-events: visible;
    }

    .modal-content {
      width: 40rem;
      height: 42rem;
      background-color: rgba(245, 245, 245, 0.8);
      transition: all 0.4s ease-in-out;
      transform: translateY(-200px);
      text-align: center;
    }

    .modal.show .modal-content {
      transform: translateY(0);
    }

    .modal.exit .modal-content {
      transform: translateY(-200px);
    }

    .modal-header,
    .modal-footer {
      padding: 1rem;
    }

    .modal-title {
      margin: 0;
      font-size: 1.5rem;
    }

    .modal-body {
      padding: 1px;
      height: 26rem;
    }

    .image_box {
      width: 350px;
      display: block;
    }

    .modal-body-favorite-photoes {
      width: 33%;
    }

    .favorite_image {
      display: flex;
    }

    .image_box {
      width: 100%;
      text-decoration: none;
    }

    .modal_image {
      width: 11rem;
      height: 11rem;
    }

    .modal-body-favorite-photoes {
      width: 100%;
    }

    .favorite_h1 {
      font-size: 1.5rem;
    }
    .favorite_p {
      font-size: 1rem;
    }
    .button {
      cursor: pointer;
      width: 10rem;
      padding: 0.2rem 2.5rem;
      margin-top: 7rem;
      font-size: 1rem;
      position: relative;
      overflow: hidden;
      border: 0;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background-color: #e5e8ed;
      color: #343a40;
      border: 2px solid #343a40;
    }
    .button:hover {
      color: #ffffff;
      background-color: #343a40;
      border: 2px solid #ffffff;
    }
  }

  @media (min-width: 1020px) {
    .modal {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.4s ease-in-out;
      pointer-events: none;
    }

    .modal.show {
      opacity: 1;
      pointer-events: visible;
    }

    .modal.exit {
      opacity: 0;
    }

    .modal-content {
      width: 80rem;
      height: 37rem;
      background-color: rgba(245, 245, 245, 0.8);
      transition: all 0.4s ease-in-out;
      transform: translateY(-200px);
      text-align: center;
    }

    .modal.show .modal-content {
      transform: translateY(0);
    }

    .modal.exit .modal-content {
      transform: translateY(-200px);
    }

    .modal-header,
    .modal-footer {
      padding: 1rem;
    }

    .modal-title {
      margin: 0;
      font-size: 1.5rem;
    }

    .modal-body {
      padding: 1px;
      height: 26rem;
      display: flex;
      justify-content: space-around;
    }

    .image_box {
      width: 350px;
      display: block;
    }

    .modal-body-favorite-photoes {
      width: 33%;
    }

    .favorite_image {
      width: 120%;
      height: auto;
      margin: 0%;
    }

    .hover {
      position: relative;
      figure {
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          transition: 0.3s;
        }
        figcaption {
          opacity: 0;
          transition: 0.3s;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-40%, -50%);
          width: calc(110% - 30px);
          height: calc(100% - 30px);
          color: #fff;
          border: solid 1px #fff;
          .txt_box {
            position: relative;
            width: 100%;
            height: 100%;
            color: #ffffff;
            .favorite_h1 {
              color: #ffffff;
              margin: 0%;
            }
            .favorite_p {
              margin: 0%;
              width: 100%;
              text-align: center;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              color: #ffffff;
              font-size: 1.5rem;
            }
          }
        }
      }
      &:hover {
        figure {
          img {
            filter: brightness(50%);
            transform: scale(1.2);
          }
          figcaption {
            opacity: 1;
          }
        }
      }
    }
    .button {
      cursor: pointer;
      width: 15rem;
      padding: 0.2rem 2.5rem;
      font-size: 1.2rem;
      position: relative;
      overflow: hidden;
      border: 0;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background-color: #e5e8ed;
      color: #343a40;
      border: 2px solid #343a40;
    }
    .button:hover {
      color: #ffffff;
      background-color: #343a40;
      border: 2px solid #ffffff;
    }
  }
`;
