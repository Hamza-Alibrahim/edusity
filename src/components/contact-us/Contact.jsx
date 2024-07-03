import "./Contact.css";
import msg from "../../assets/msg-icon.png";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import next from "../../assets/white-arrow.png";
import { useState } from "react";
import Header from "../header/Header";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "9eb70908-c539-4fc9-bcaa-b36d1071999f");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <Header subTitle="Contact US" title="Get in Touch" />
      <div className="contact-fields">
        <div className="contact-col">
          <div className="send">
            <h3 className="send-title">Send us a message</h3>
            <img className="send-photo" src={msg} alt="" />
          </div>
          <p className="note">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exeptional service to our
            university community.
          </p>
          <div className="accounts">
            <div className="account">
              <img className="account-icon" src={mail} alt="" />
              <p className="account-txt">Contact@GreatStack.dev</p>
            </div>
            <div className="account">
              <img className="account-icon" src={phone} alt="" />
              <p className="account-txt">+1 123-456-7890</p>
            </div>
            <div className="account">
              <img className="account-icon" src={location} alt="" />
              <p className="account-txt">
                77 Massachusetts Ave, Cambridge Ma 02139, United States
              </p>
            </div>
          </div>
        </div>
        <div className="contact-col">
          <form className="form-input" onSubmit={onSubmit}>
            <div className="input-field">
              <label className="input-label" htmlFor="name">
                Your name
              </label>
              <input
                className="input-area"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-field">
              <label className="input-label" htmlFor="number">
                Phone number
              </label>
              <input
                className="input-area"
                id="number"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="text"
                placeholder="Enter your number"
                required
              />
            </div>
            <div className="input-field">
              <label className="input-label" htmlFor="message">
                Write your message here
              </label>
              <textarea
                className="input-area"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                rows={10}
                required
              />
            </div>
            <button className="btn dark-btn">
              <span className="submit-txt">Submit now</span>{" "}
              <img className="submit-icon" src={next} alt="" />
            </button>
          </form>
          <span className="sending">{result}</span>
        </div>
      </div>
    </div>
  );
};
export default Contact;
