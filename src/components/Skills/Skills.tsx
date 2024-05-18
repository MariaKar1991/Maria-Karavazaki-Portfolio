import "./Skills.css";

export default function Skills(): JSX.Element {
  return (
    <>
      <div className="skills-animation-container">
        <div className="skills-animation-content">
          <h2 className="skills-header">Skills</h2>
          <h2 className="skills-header">Skills</h2>
        </div>
      </div>

      <div className="skills mt-2 relative z-10">
        <ul className="skills-list mt-8 mx-auto max-w-xs text-left font-medium text-lg leading-none border-gray-200">
          {/* List of skills with links to their respective documentation */}
          {skills.map((skill, index) => (
            <li key={index}>
              <a
                className="skills-section py-3.5 w-full flex items-center text-white-500 hover:text-white-700 hover:bg-blue-50"
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ml-5 mr-2.5 w-1 h-7 bg-gray-500 rounded-r-md" />
                {skill.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// List of skills and their corresponding links
const skills = [
  { name: "TypeScript", link: "https://www.typescriptlang.org/" },
  { name: "React", link: "https://react.dev/" },
  { name: "Angular", link: "https://angular.io/" },
  { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Tailwind", link: "https://tailwindcss.com/" },
  { name: "Bootstrap", link: "https://getbootstrap.com/" },
  { name: "Node.js", link: "https://nodejs.org/en" },
  { name: "MongoDB", link: "https://www.mongodb.com/" },
  { name: "Prisma", link: "https://www.prisma.io/" },
  {
    name: "Web APIs",
    link: "https://developer.mozilla.org/en-US/docs/Web/API",
  },
  {
    name: "WebSocket API",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
  },
  { name: "Jest", link: "https://jestjs.io/" },
  { name: "Postman", link: "https://www.postman.com/" },
  { name: "Figma", link: "https://www.figma.com/" },
  { name: "Gimp", link: "https://www.gimp.org/" },
  {
    name: "UX",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/UX?retiredLocale=el",
  },
  {
    name: "Responsive design",
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
  },
];
