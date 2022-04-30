import CV from "../assets/CV.pdf";
import classes from "../styles/Header.module.css";
export default function CTA() {
  return (
    <div className={classes.cta}>
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#Contact" className="btn">
        Contact Me!
      </a>
    </div>
  );
}
