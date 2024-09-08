import "./CVInMain.css";

export default function CVInMain(): JSX.Element {
  // File path to the CV PDF
  const cvFilePath = "/Maria.Karavazaki.CV.pdf";

  return (
    <div className="cv-main-container flex items-center justify-center">
      <a
        className="download-here text-white text-center"
        href={cvFilePath}
        download="Maria.Karavazaki.CV.pdf"
      >
        Download My CV
      </a>
      <img
        className="white-logo-cv"
        src="/images/logo-white.png"
        alt="white logo icon"
      />
    </div>
  );
}
