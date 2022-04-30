import { BsFillCheckSquareFill } from "react-icons/bs";
import classes from "../styles/Experience.module.css";
export default function Experience() {
  return (
    <section id="Experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
      <div className={`container ${classes.experience_container}`}>
        <div className={classes.present}>
          <h3>Present Working skills</h3>
          <div className={classes.experience_content}>
            <article className={classes.details}>
              <BsFillCheckSquareFill className={classes.icon} />
              <h4>JavaScript</h4>
            </article>
            <article className={classes.details}>
              <BsFillCheckSquareFill className={classes.icon} />
              <h4>React JS</h4>
            </article>
            <article className={classes.details}>
              <BsFillCheckSquareFill className={classes.icon} />
              <h4>HTML</h4>
            </article>
            <article className={classes.details}>
              <BsFillCheckSquareFill className={classes.icon} />
              <h4>CSS</h4>
            </article>
            <article className={classes.details}>
              <BsFillCheckSquareFill className={classes.icon} />
              <h4>SQL</h4>
            </article>
          </div>
        </div>

        <div className={classes.past}>
          <h3>Past Working skills</h3>
          <div className={classes.experience_content}>
            <article className={classes.details}>
              <BsFillCheckSquareFill className={classes.icon} />
              <h4>Python</h4>
            </article>
            <article className={classes.details}>
              <BsFillCheckSquareFill className={classes.icon} />
              <h4>C</h4>
            </article>
            <article className={classes.details}>
              <BsFillCheckSquareFill className={classes.icon} />
              <h4>C++</h4>
            </article>
            <article className={classes.details}>
              <BsFillCheckSquareFill className={classes.icon} />
              <h4>Deep Learning</h4>
            </article>
            <article className={classes.details}>
              <BsFillCheckSquareFill className={classes.icon} />
              <h4>Machine Learning</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
