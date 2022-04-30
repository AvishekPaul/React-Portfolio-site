import me from "../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { AiOutlineRead, AiOutlineFolderOpen } from "react-icons/ai";
import classes from "../styles/About.module.css";
export default function About() {
  return (
    <section id="About">
      <h5>Get to Know</h5>
      <h2>About Me!</h2>
      <div className={`container ${classes.about_container}`}>
        <div className={classes.about_me}>
          <div className={classes.image}>
            <img src={me} alt="About_image" />
          </div>
        </div>
        <div className={classes.about_content}>
          <div className={classes.about_cards}>
            <article className={classes.about_card}>
              <FaAward className={classes.about_icon} />
              <h5>Experience</h5>
              <small>1 year working, @company</small>
            </article>
            <article className={classes.about_card}>
              <AiOutlineRead className={classes.about_icon} />
              <h5>Education</h5>
              <small>
                Bachelors of Science in Computer Science & Enginerring
              </small>
            </article>
            <article className={classes.about_card}>
              <AiOutlineFolderOpen className={classes.about_icon} />
              <h5>Projects</h5>
              <small>4 projects</small>
            </article>
          </div>

          <p>
            I am a react developer. I have working with JavaScript and React JS
            for the last one year. I am working at this company. I aim for
            excellence and want to do my job at any cost. Looking forward to
            working with you Thank you.
          </p>
          <a href="#Contact" className="btn">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}
