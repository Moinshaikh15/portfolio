import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [msgSent, setMsgSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        `${process.env.REACT_APP_PUBLIC_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          // show the user a success message
          setMsgSent(true);
          setTimeout(() => {
            setMsgSent(false);
          }, 1000);
        },
        (error) => {
          // show the user an error
          console.log(error);
        }
      );
    e.target.reset();
  };

  useEffect(() => {}, []);
  return (
    <div className="contact-container" id="Contact">
      <h2>Contact Me</h2>
      <p>
        My inbox is always open. Whether you have a question or just want to say
        hello, I will try my best to get back to you!
      </p>

      <form action="" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          className="inpt"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          className="inpt"
        />
        <textarea
          name="message"
          id=""
          cols="20"
          rows="4"
          placeholder="Message"
          className="inpt"
        ></textarea>

        <input type="submit" className="contact-btn" value="Send" />
      </form>
      <p
        className="success-msg"
        style={{ visibility: !msgSent ? "hidden" : "" }}
      >
        Sent Successfully!
      </p>

      <p>OR</p>
      <p>Mail at: moinshaikh1592001@gmail.com </p>
    </div>
  );
}
