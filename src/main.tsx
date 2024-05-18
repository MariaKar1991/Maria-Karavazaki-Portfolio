import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import emailjs from "emailjs-com";
import "./index.css";

emailjs.init("6II8XSS4gk6En0Y07");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
