import React from "react";

export default function Contact() {
  return (
    <div className="contact-container" id="Contact">
      <h2>Contact Me</h2>
      <p>
        My inbox is always open. Whether you have a question or just want to say
        hello, I will try my best to get back to you!
      </p>

      <form action="">
        <input type="text" name="name" placeholder="Name"/>
        <input type="email" name="email" placeholder="Email"/>
        <textarea name="" id="" cols="20" rows="6" placeholder="Message"></textarea>
      </form>

      <button className="contact-btn" >Send</button>
      <p>OR</p>
      <p>Mail at: moinshaikh1592001@gmail.com </p>
    </div>
  );
}
