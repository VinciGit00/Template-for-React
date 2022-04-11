import { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mrk0h4p",
        "template_x5bmvhc",
        form.current,
        "nW6LUTi3pEck0RPd-"
      )
      //emailjs
      // .sendForm("service_ls6d3ox", "template_x5bmvhc")

      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="Padding_top">
                <input placeholder="Name" type="text" name="name" required />
              </div>
              <div className="Padding">
                <input placeholder="Email" type="email" name="email" required />
              </div>
              <div className="Padding">
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </div>

              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>

              <div className="Padding">
                <button type="submit" class="btn btn-dark">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
