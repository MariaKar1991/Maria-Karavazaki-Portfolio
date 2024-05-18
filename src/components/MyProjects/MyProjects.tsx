import ProjectsCards from "../ProjectsCards/ProjectsCards";
import "./MyProjects.css";

//Renders the projects section
export default function MyProjects(): JSX.Element {
  return (
    <>
      <div className="myProjects-container">
        <section>
          <div className="myProjects-content">
            <h2>
              <strong className="strongGap">My</strong>Projects
            </h2>
            <h2>
              <strong className="strongGap">My</strong>Projects
            </h2>
          </div>
        </section>
      </div>
      <ProjectsCards />
      <div className="github-link-container">
        <h1 className="github-link-my-projects">
          You can find more examples of my previous work on my GitHub profile:
          <a
            className="github-link"
            href="https://github.com/MariaKar1991"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/MariaKar1991
          </a>
        </h1>
        <img
          className="github-icon"
          src="/public/white-github.png"
          alt="GitHub Icon"
        />
      </div>
    </>
  );
}
