import "./Footer.css";

export default function Footer(): JSX.Element {
  // Function to scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="footer-container relative bottom-0 bg-black flex items-center justify-center flex-col">
        <img
          className="arrowUp rounded-full"
          src="/images/arrowUp.png"
          alt="arrow up icon"
          // Event handler to scroll to top on click
          onClick={scrollToTop}
        />
        <p className="footer-paragraph text-white text-center justify-center max-w-full">
          &copy; 2024 <span className="myName">Maria Karavazaki.</span>
        </p>
      </div>
    </>
  );
}
