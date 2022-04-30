import CTA from "./CTA";
import Myself from "../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import classes from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={`container ${classes.header_container}`}>
        <h5>Hello! I am</h5>
        <h1>Avishek Paul</h1>
        <h5 className="text-light">React Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#Contact" className={classes.scroll_down}>
          Scroll Down
        </a>
        <div className={classes.me}>
          <img src={Myself} alt="me" />
        </div>
      </div>
    </header>
  );
}
