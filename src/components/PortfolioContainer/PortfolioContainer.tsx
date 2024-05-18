import { useState, useEffect } from "react";
import AvatarAnimation from "../Avatar-Animation/AvatarAnimation";
import MainPage from "../Pages/MainPage/MainPage";
import { PortfolioContainerContext } from "../../PortfolioContainerContext";
import { Project } from "../../Interfaces/ProjectInterface";

export default function PortfolioContainer(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showAvatar, setShowAvatar] = useState<boolean>(true);

  // Effect to fetch projects data and handle the avatar animation timeout
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/projects.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();

    const timer = setTimeout(() => {
      setShowAvatar(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-container">
      <PortfolioContainerContext.Provider value={projects}>
        {showAvatar ? <AvatarAnimation /> : <MainPage />}
      </PortfolioContainerContext.Provider>
    </div>
  );
}
