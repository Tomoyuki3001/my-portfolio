import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k9qfmdv",
        "template_2kegrbn",
        form.current,
        "2ZrJYgCWQbrUz3Hz4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Subject</label>
        <input type="subject" name="user_subject" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  @media (min-width: 361px) {
    width: 50%;
    form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      font-size: 1.5rem;
      margin-top: 5rem;
      input {
        width: 100%;
        height: 35px;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }
      textarea {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        max-height: 100px;
        min-height: 100px;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }
      label {
        margin-top: 1rem;
      }
      button {
        width: 70%;
        margin: 5% 15% 0% 17%;
        cursor: pointer;
        background: rgb(249, 105, 14);
        color: white;
        border: none;
        font-size: 1.5rem;
        border-radius: 5px;
      }
    }
  }
  width: 100%;
  form {
    margin-top: 10%;
  }
  textarea {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    max-height: 100px;
    min-height: 100px;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    &:focus {
      border: 2px solid rgba(0, 206, 158, 1);
    }
  }
  button {
    width: 60%;
    margin: 5% 15% 0% 17%;
    cursor: pointer;
    background: rgb(249, 105, 14);
    color: white;
    border: none;
    font-size: 1rem;
    border-radius: 5px;
  }
`;