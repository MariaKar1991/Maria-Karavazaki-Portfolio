import "./Accordion.css";

// Accordion component
export default function Accordion(): JSX.Element {
  return (
    <div className="mt-[-200px]">
      <div className="faq-animation-container flex justify-center items-center max-w-[100%]">
        <div className="faq-animation-content">
          <h2 className="faq-header text-[#fff] absolute">FAQ</h2>
          <h2 className="faq-header text-[#fff] absolute">FAQ</h2>
        </div>
      </div>

      {/* Accordion container */}
      <div key="1" className="accordion-container mx-auto max-w-[80%]">
        <div
          className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
          tabIndex={1}
        >
          {/* Accordion item title and toggle icon */}
          <div className="accordion-sections-title flex cursor-pointer justify-between">
            <span> What services do you offer?</span>
            <img
              className="mt-4 h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            />
          </div>
          <div className="accordion-sections-paragraph invisible h-auto max-h-0 opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            As a web developer, I offer a comprehensive range of services
            tailored to meet the diverse needs of my clients. My expertise spans
            both frontend and backend development, ensuring that I can deliver a
            complete solution for any project. In addition to development, I
            also prioritize deployment and testing to ensure that the final
            product meets the highest standards of quality and performance.
          </div>
        </div>
        <div
          className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
          tabIndex={2}
        >
          <div className="accordion-sections-title flex cursor-pointer justify-between">
            <span> What technologies do you specialize in?</span>
            <img
              className="mt-4 h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            />
          </div>
          <div className="accordion-sections-paragraph invisible h-auto max-h-0 opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            <ul>
              <li>TypeScript</li>
              <li>React</li>
              <li>Angular</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Jest</li>
              <li>MongoDB</li>
              <li>Web APIs</li>
              <li>WebSockets</li>
            </ul>
          </div>
        </div>
        <div
          className="group flex flex-col gap-2 rounded-lg bg-black p-5 text-white"
          tabIndex={3}
        >
          <div className="accordion-sections-title flex cursor-pointer justify-between">
            <span>Can you provide examples of your work? </span>
            <img
              className="mt-4 h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            />
          </div>
          <div className="accordion-sections-paragraph invisible h-auto max-h-0 opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            You can find examples of my previous work on my GitHub profile:
            <a
              className="github-link"
              href="https://github.com/MariaKar1991"
              target="_blank"
            >
              https://github.com/MariaKar1991
            </a>
            <br />
            On my GitHub, you'll find a collection of projects that demonstrate
            my skills and expertise in web development.
            <br />
            Feel free to explore my repositories to get a better sense of my
            coding style, problem-solving abilities, and the types of projects
            I've worked on.
            <br />
            If you have any questions or would like more information about a
            specific project, please don't hesitate to reach out.
          </div>
        </div>
      </div>
    </div>
  );
}
