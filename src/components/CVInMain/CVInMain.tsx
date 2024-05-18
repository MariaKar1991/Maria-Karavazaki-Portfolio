import "./CVInMain.css";

export default function CVInMain(): JSX.Element {
  // File path to the CV PDF
  const cvFilePath = "./public/Maria.Karavazaki.CV.pdf";

  return (
    <div className="cv-main-container">
      <a
        className="download-here"
        href={cvFilePath}
        download="Maria.Karavazaki.CV.pdf"
      >
        Download My CV
      </a>
      <img
        className="white-logo-cv"
        src="/public/logo-white.png"
        alt="white logo icon"
      />
    </div>
  );
}
