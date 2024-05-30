import "./About.css";

export default function About(): JSX.Element {
  return (
    <div className="about-container">
      <div className="about-animation-container">
        <div className="about-animation-content">
          <h2 className="about-header">About</h2>
          <h2 className="about-header">About</h2>
        </div>
      </div>
      <div className="about-paragraph-container">
        <p className="about-paragraph">
          I'm a bright, motivated, and enthusiastic web developer.
          <br />
          I'm passionate about React, Angular, Node.js, Next.js, Jest, UX/UI,
          and MongoDB, learning new technologies and the software development
          techniques needed to write the best quality code.
          <br />
          Overall, my goal is to provide end-to-end solutions that not only meet
          but exceed the expectations of my clients, delivering innovative and
          reliable web applications.
        </p>
      </div>
    </div>
  );
}
