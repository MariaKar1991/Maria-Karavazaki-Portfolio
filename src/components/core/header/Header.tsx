import "./Header.css";

export default function Header(): JSX.Element {
  return (
    <header className="header-container justify-center items-center mx-auto">
      <h1 className="welcome-title text-white text-center relative">Welcome</h1>
      <div className="header-info">
        <h2>I'm Maria Karavazaki.</h2>
        <h2 className="web-dev">
          A Web Developer <span className="hero">{"<hero>"}</span>
        </h2>
        <img
          className="white-logo absolute"
          src="/images/logo-white.png"
          alt="white logo icon"
        />
      </div>
    </header>
  );
}
