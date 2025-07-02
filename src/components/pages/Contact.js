import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Particle from "../../Particle";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import Header from "../Header";
import '../../styles/contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_b0l9x1l",     // Replace with your EmailJS service ID
      "template_jkq7fs3",    // Replace with your EmailJS template ID
      form.current,
      "EcvSUax2UL34xqWnt"      // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log("Email sent successfully:", result.text);
      alert("Message sent successfully!");
      form.current.reset(); // Reset form after successful send
    }, (error) => {
      console.error("Failed to send email:", error.text);
      alert("Failed to send message.");
    });
  };

  return (
    <>
      <Particle />
      <div className="container lopppp">
        <Header />

        <div className="">
          <div className="container">
            <div className="">
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>Let's Chat. <br /> Tell me about your <br className="project-br" /> Project.</span>
                  </div>
                  <div className="app-create">Let's create something together</div>
                  <div className="app-contact">
                    <span className="icon-contact"><LiaPhoneVolumeSolid /></span>
                    +92 319 3865337
                  </div>
                  <div className="app-contact">
                    <span className="icon-contact"><MdEmail /></span>
                    shariikhan925@gmail.com
                  </div>
                </div>

                <div className="screen-body-item">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="app-form">
                      <div className="app-form-group">
                        <input className="app-form-control" name="user_name" placeholder="NAME" required />
                      </div>
                      <div className="app-form-group">
                        <input className="app-form-control" name="user_email" placeholder="EMAIL" required />
                      </div>
                      <div className="app-form-group">
                        <input className="app-form-control" name="contact" placeholder="CONTACT NO" />
                      </div>
                      <div className="app-form-group message">
                        <input className="app-form-control" name="message" placeholder="MESSAGE" required />
                      </div>
                      <div className="app-form-group buttons">
                        <button className="app-form-button" type="reset">CANCEL</button>
                        <button className="app-form-button" type="submit">SEND</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
