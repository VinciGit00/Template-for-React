import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Form from "react-bootstrap/Form";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <form>
          <ul>
            <div className="Padding">
              <input placeholder="Name" type="text" name="name" required />
            </div>
            <div className="Padding">
              <input placeholder="Email" type="email" name="email" required />
            </div>

            <div className="Padding">
              {" "}
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </div>
            <div className="Padding">
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>

            <input
              type="submit"
              className="btn btn-primary"
              value="SEND"
            ></input>
          </ul>
        </form>
      </div>
    );
  }
}
