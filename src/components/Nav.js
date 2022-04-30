import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineInfoCircle,
  AiOutlineMessage,
  AiOutlineBook,
} from "react-icons/ai";

import classes from "../styles/Nav.module.css";

export default function Nav() {
  const [activeState, setActiveState] = useState("#");

  return (
    <nav>
      <a
        href="/"
        onClick={() => setActiveState("#")}
        className={activeState === "#" ? `${classes.active}` : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#About"
        onClick={() => setActiveState("#About")}
        className={activeState === "#About" ? `${classes.active}` : ""}
      >
        <AiOutlineInfoCircle />
      </a>
      <a
        href="#Experience"
        onClick={() => setActiveState("#Experience")}
        className={activeState === "#Experience" ? `${classes.active}` : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#Projects"
        onClick={() => setActiveState("#Projects")}
        className={activeState === "#Projects" ? `${classes.active}` : ""}
      >
        <AiOutlineProject />
      </a>
      <a
        href="#Contact"
        onClick={() => setActiveState("#Contact")}
        className={activeState === "#Contact" ? `${classes.active}` : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
}
