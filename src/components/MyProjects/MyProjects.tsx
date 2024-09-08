import ProjectsCards from "../ProjectsCards/ProjectsCards";
import "./MyProjects.css";

//Renders the projects section
export default function MyProjects(): JSX.Element {
  return (
    <>
      <div className="myProjects-container flex justify-center items-center max-w-full">
        <section>
          <div className="myProjects-content text-center">
            <h2>
              <span className="strongGap">My</span>Projects
            </h2>
            <h2>
              <span className="strongGap">My</span>Projects
            </h2>
          </div>
        </section>
      </div>
      <ProjectsCards />
      <div className="github-link-container flex items-center justify-center">
        <h1 className="github-link-my-projects text-white">
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
          src="/images/white-github.png"
          alt="GitHub Icon"
          loading="lazy"
        />
      </div>
    </>
  );
}
