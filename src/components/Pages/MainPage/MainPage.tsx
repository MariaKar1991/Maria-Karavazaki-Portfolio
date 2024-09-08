import About from "../../About/About";
import Accordion from "../../Accordion/Accordion";
import CVInMain from "../../CVInMain/CVInMain";
import Contact from "../../Contact/Contact";
import MyProjects from "../../MyProjects/MyProjects";
import Skills from "../../Skills/Skills";
import Footer from "../../core/footer/Footer";
import Header from "../../core/header/Header";
import NavigationBar from "../../core/nav/NavigationBar";
import "./MainPage.css";

/**
 * Main component representing the main page of the portfolio.
 */
export default function MainPage(): JSX.Element {
  return (
    <>
      <main className="main-container flex flex-col items-center text-center h-screen min-h-screen">
        <NavigationBar />
        <Header />
        <About />
        <Skills />
        <MyProjects />
        <CVInMain />
        <Accordion />
        <Contact />
        <div className="main-image-container relative flex items-center w-full h-auto">
          <img
            className="avatar-in-main-image max-w-full max-h-full"
            src="/images/total-gray-avatar.png"
            alt="avatar image in main page"
            loading="lazy"
          />
        </div>
        <Footer />
      </main>
    </>
  );
}
