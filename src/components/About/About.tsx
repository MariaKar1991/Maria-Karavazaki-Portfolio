import "./About.css";
import { ReactTyped } from "react-typed";

export default function About(): JSX.Element {
  return (
    <div className="about-container flex flex-col items-center justify-center">
      <div className="about-animation-container mb-[50px]">
        <div className="about-animation-content mb-[110px] text-center">
          <h2 className="text-[#fff] absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2">
            About
          </h2>
          <h2 className="text-[#fff] absolute top-50 left-50 transform -translate-x-1/2 -translate-y-1/2">
            About
          </h2>
        </div>
      </div>
      <div className="max-w-[600px] min-w-[300px]">
        <div className="about-paragraph-container flex flex-col items-center justify-center">
          <p className="about-paragraph text-white text-justify leading-7 w-[70%] mx-auto tracking-tight word-spacing-[0.1rem]">
            I'm a bright, motivated, and enthusiastic web{" "}
            <ReactTyped
              className="inline-block"
              strings={["developer.", "hero."]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
          <p className="about-paragraph text-white text-justify leading-7 w-[70%] mx-auto tracking-tight word-spacing-[0.1rem]">
            I'm passionate about React, Angular, Node.js, Next.js, Jest, UX/UI,
            and MongoDB, learning new technologies and the software development
            techniques needed to write the best quality code. Overall, my goal
            is to provide end-to-end solutions that not only meet but exceed the
            expectations of my clients, delivering innovative and reliable web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}
