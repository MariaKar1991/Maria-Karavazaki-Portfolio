import { createContext } from "react";
import { Project } from "./Interfaces/ProjectInterface";

export const PortfolioContainerContext = createContext<Project[]>([]);
