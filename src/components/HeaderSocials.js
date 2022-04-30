import { BsLinkedin, BsGithub } from "react-icons/bs";
import classes from "../styles/Header.module.css";

export default function HeaderSocials() {
  return (
    <div className={classes.header_socials}>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
}
