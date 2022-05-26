import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h1>
          <span className="main-temp">{Math.round(props.celsius)}</span>
          <span className="unit-temp">
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <h1>
          <span className="main-temp">{Math.round(fahrenheit)}</span>
          <span className="unit-temp">
            <a href="/" onClick={convertToCelsius}>
              °C |{" "}
            </a>
            °F
          </span>
        </h1>
      </div>
    );
  }
}
