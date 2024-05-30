import "./Card.css";
import { Props } from "../../Interfaces/PropsInterface";

// Card component
export default function Card({ project }: Props): JSX.Element {
  return (
    <div className="projects-card p-8 max-w-lg border border-white-300 rounded-2xl hover:shadow-lg hover:shadow-indigo-50 flex flex-col items-center">
      <img
        className="project-image
        shadow rounded-lg overflow-hidden border"
        src={project.image}
        alt={project.name}
        loading="lazy"
      />
      <div className="mt-8">
        <h4 className="project-name font-bold text-xl">{project.name}</h4>
        <p className="description mt-3">{project.description}</p>
        <div className="button-container">
          <div className="button-wrapper">
            <a
              href={project?.demo}
              className="button inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm"
              style={{ pointerEvents: project?.demo ? "auto" : "none" }}
            >
              Live Demo
            </a>
          </div>
          <div className="button-wrapper">
            <a
              href={project.code}
              className="button inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm"
              style={{ pointerEvents: project.code ? "auto" : "none" }}
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
