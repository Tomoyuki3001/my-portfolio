import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please type name");
      return;
    }
    if (email === "") {
      alert("Please type email address");
      return;
    }
    if (subject === "") {
      alert("Please type subject");
      return;
    }
    if (text === "") {
      alert("Please type text");
      return;
    }
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
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setSubject("");
    setText("");
    alert("Thank you for sending us e-mail!");
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className="form_input"
          value={name}
          onChange={handleChangeName}
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          className="form_input"
          value={email}
          onChange={handleChangeEmail}
        />
        <label>Subject</label>
        <input
          type="subject"
          name="user_subject"
          className="form_input"
          value={subject}
          onChange={handleChangeSubject}
        />
        <label>Message</label>
        <textarea
          name="message"
          className="form_input"
          value={text}
          onChange={handleChangeText}
        />
        <div className="mail_button">
          <button type="submit" onClick={() => {}}>
            SEND
          </button>
        </div>
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    form {
      padding: 10% 0%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      border: 1px solid rgb(133, 133, 133);
    }
    button {
      padding: 5px 20px;
      margin: 10% 0% 0% 0%;
      position: relative;
      overflow: hidden;
      border: 0;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      background-color: #e5e8ed;
      color: #343a40;
      border: 2px solid #343a40;
      font-size: 20px;
    }

    .form_input {
      font-size: 16px;
    }

    .mail_button {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 601px) and (max-width: 1019px) {
    width: 50%;
    form {
      width: 100%;
      font-size: 1rem;
      margin-top: 20%;
      input {
        width: 100%;
        height: 1rem;
        padding: 7px;
        outline: none;
        border: 1px solid rgb(133, 133, 133);
      }
      textarea {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        max-height: 100px;
        min-height: 100px;
        padding: 7px;
        outline: none;
        border: 1px solid rgb(133, 133, 133);
      }
      label {
        margin-top: 1rem;
      }
      button {
        width: 70%;
        cursor: pointer;
        background: rgb(249, 105, 14);
        color: white;
        border: none;
        font-size: 1.2rem;
        background-color: #e5e8ed;
        color: #343a40;
        border: 2px solid #343a40;
        margin: 5% 0% 0% 17%;
      }
    }
  }

  @media (min-width: 1020px) {
    width: 50%;
    form {
      width: 100%;
      font-size: 1.5rem;
      margin-top: 30%;
      input {
        width: 100%;
        height: 35px;
        padding: 7px;
        outline: none;
        border: 1px solid rgb(133, 133, 133);
        font-size: 20px;
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
        border: 1px solid rgb(133, 133, 133);
        font-size: 20px;
        }
      }
      label {
        margin-top: 1rem;
      }
      button {
        width: 70%;
        cursor: pointer;
        background: rgb(249, 105, 14);
        color: white;
        border: none;
        background-color: #e5e8ed;
        color: #343a40;
        border: 2px solid #343a40;
        margin: 5% 0% 0% 17%;
        font-size: 24px;
      }
      button:hover {
        color: #ffffff;
        background-color: #343a40;
        border: 2px solid #ffffff;
      }
    }
  }
`;
