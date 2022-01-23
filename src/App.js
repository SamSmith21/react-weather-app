import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          This page is coded by{" "}
          <a
            href="https://www.linkedin.com/in/samantha-smith-5014424b/"
            target="_blank"
            rel="noreferrer"
          >
            Samantha Smith
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SamSmith21/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
        </p>
      </div>
    </div>
  );
}
