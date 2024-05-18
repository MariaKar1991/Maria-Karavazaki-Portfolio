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
      <div className="footer-container">
        <p className="footer-paragraph">
          &copy; 2024 <span className="myName">Maria Karavazaki</span>. All
          Rights Reserved.
        </p>
        <img
          className="arrowUp"
          src="/public/arrowUp.png"
          alt="arrow up icon"
          // Event handler to scroll to top on click
          onClick={scrollToTop}
        />
      </div>
    </>
  );
}
