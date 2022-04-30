import classes from "../styles/Testimonials.module.css";
export default function Testimonials() {
  return (
    <section id="Testimonials">
      <h5>Words from People</h5>
      <h2>References</h2>
      <div className={`container ${classes.testimonials_container}`}>
        <article>
          <div className={classes.writing}>
            <h5>Barshon Sen</h5>
            Assistant Professor,
            <br />
            Department of Computer Science & Engineering,
            <br />
            Rajshahi University of Engineering & Technology (RUET)
            <br />
            Email: barshon.sen@cse.ruet.ac.bd
          </div>
        </article>
      </div>
    </section>
  );
}
