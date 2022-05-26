import React from "react";
import "./App.css";
import WeatherMain from "./WeatherMain";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <WeatherMain defaultCity="Makati" />
          </div>
        </div>
        <div>
          <a
            href="https://github.com/chocoboabby/react-weatherapp-abby"
            target="_blank"
            rel="noreferrer"
          >
            <small>Open source code</small>
          </a>{" "}
          <small>by Abby Dela Fuente</small>
        </div>
      </div>
    </div>
  );
}
