import classes from "../styles/Contact.module.css";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
export default function Contact() {
  return (
    <section id="Contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className={`container ${classes.contact_container}`}>
        <div className={classes.contact_options}>
          <article className={classes.contact_option}>
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>paulavishek222@gmail.com</h5>
            <a
              href="mailto:paulavishek222@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className={classes.contact_option}>
            <AiOutlineLinkedin />
            <h4>LinkedIn</h4>
            <h5>Avishek Paul</h5>
            <a
              href="https://www.linkedin.com/in/avishek-paul-348434143/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
