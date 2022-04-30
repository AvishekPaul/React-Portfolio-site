import classes from "../styles/Projects.module.css";
import image1 from "../assets/portfolio1.jpg";
import image2 from "../assets/portfolio3.jpg";
export default function Projects() {
  const data = [
    {
      id: 1,
      image: image1,
      title: "University-Admission-Result-Compilation-Software",
      github:
        "https://github.com/AvishekPaul/University-Admission-Result-Compilation-Software",
    },
    {
      id: 2,
      image: image2,
      title: "University-Online-Registration-System",
      github:
        "https://github.com/AvishekPaul/University-Online-Registration-System",
    },
  ];
  return (
    <section id="Projects">
      <h5>My recent Works</h5>
      <h2>Projects</h2>
      <div className={`container ${classes.projects_container}`}>
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className={classes.project_item}>
              <div className={classes.image}>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
