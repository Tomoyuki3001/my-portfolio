import React from "react";
import { CSSTransition } from "react-transition-group";
import { ModalStyle } from "../Style/Modal";

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <ModalStyle>
        <div
          className={`modal ${props.show ? "show" : ""}`}
          onClick={props.onClose}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="modal-title">My favorite things</h4>
            </div>
            <div className="modal-body">
              <div className="modal-body-favorite-photoes">
                <a href="" className="image_box hover">
                  <figure className="favorite_image">
                    <img
                      src={`${process.env.PUBLIC_URL}/image_favorite_1.jpg`}
                      alt="photos"
                    />
                    <figcaption className="favorite_image_hover">
                      <div className="txt_box">
                        <h1 className="favorite_h1">TENNIS</h1>
                        <p className="favorite_p">
                          One of my favorite sports. I have played tennis for
                          more than 10 years. I like watching tennis games,
                          playing it with my friends, and talking about it. It
                          makes me happy every time.
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="modal-body-favorite-photoes">
                <a href="" className="image_box hover">
                  <figure className="favorite_image">
                    <img
                      src={`${process.env.PUBLIC_URL}/image_favorite_2.jpg`}
                      alt="photos"
                    />
                    <figcaption className="favorite_image_hover">
                      <div className="txt_box">
                        <h1 className="favorite_h1">PHOTOS</h1>
                        <p className="favorite_p">
                          I like taking photos at any places. Especially, I love
                          sea, sky, and people. While I take it, I always feel
                          like getting new mind and ideas. Also, that is helpful
                          to think about new things. This is one of my favorite
                          moments.
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="modal-body-favorite-photoes">
                <a href="" className="image_box hover">
                  <figure className="favorite_image">
                    <img
                      src={`${process.env.PUBLIC_URL}/image_favorite_3.jpg`}
                      alt="photos"
                    />
                    <figcaption className="favorite_image_hover">
                      <div className="txt_box">
                        <h1 className="favorite_h1">TRIATHON</h1>
                        <p className="favorite_p">
                          Triathlon is big challenging for me because that has
                          three types of sports. It is not easy things. But I
                          like to get through those tough situations. Out of
                          season, I go running in my free time.
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                </a>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={props.onClose} className="button">
                Close
              </button>
            </div>
          </div>
        </div>
      </ModalStyle>
    </CSSTransition>
  );
};

export default Modal;
