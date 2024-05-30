import React from "react";
import "./index.css";
import "./App.css";
import PortfolioContainer from "./components/PortfolioContainer/PortfolioContainer";

/**
 * App component is the root component of the application.
 *
 * @returns {JSX.Element} The rendered JSX element.
 */
function App(): JSX.Element {
  return (
    <div className="app">
      <PortfolioContainer />
    </div>
  );
}

export default App;
