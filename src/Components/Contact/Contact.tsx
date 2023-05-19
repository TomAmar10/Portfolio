import { useState } from "react";
import "./Contact.scss";
import { Link } from "react-scroll";

function Contact(): JSX.Element {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isDone, setIsDone] = useState(false);

  const sendContact = (e: any) => {
    e.preventDefault();
    const contact = { name, email, message };
    setIsDone(true);
    //  do something with it
  };

  return (
    <div className="Contact" id="Contact">
      <h1 className="header">Contact</h1>
      <span className="header-border"></span>
      <p>
        Feel free to contact me for any reason, wether it's a question,
        suggestion, or hopefully a job offer ;)
      </p>
      <form className="contact-form" onSubmit={sendContact}>
        <div className={!isDone ? "" : "hide"}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email / Phone number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email or phone number"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              rows={3}
              className="form-control"
              placeholder="Enter your message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button className="submit-btn">SUBMIT</button>
        </div>
        <div className={`thanks-msg ${isDone ? "" : "hide"}`}>
          <span>✔</span>
          <p>Thank you for your message!</p>
          <Link to="Home" spy={true} offset={-100} className="home-btn">
            BACK TO TOP
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Contact;
