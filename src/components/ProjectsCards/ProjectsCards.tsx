import Card from "../Card/Card";
import "./ProjectsCards.css";
import { useContext } from "react";
import { PortfolioContainerContext } from "../../PortfolioContainerContext";
import { Project } from "../../Interfaces/ProjectInterface";

export default function ProjectsCards(): JSX.Element {
  // Retrieve projects from context
  const projects: Project[] = useContext(PortfolioContainerContext);

  return (
    <div className="projects-cards-container flex flex-wrap justify-center items-center">
      {/* Map through projects and render Card component for each project */}
      {projects.map((project) => (
        <Card key={project.name} project={project} />
      ))}
    </div>
  );
}
