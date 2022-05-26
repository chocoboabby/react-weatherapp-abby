import React, { useState } from "react";

export default function WeatherTempConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <h1 className="WeatherTempConversion">
        <span id="main-temp">{Math.round(props.celsius)}</span>
        <span>
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </h1>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <h1 className="WeatherTempConversion">
        <span id="main-temp">{Math.round(fahrenheit)}</span>
        <span>
          <a href="/" id="celsius-temp" onClick={showCelsius}>
            °C |{" "}
          </a>
          °F
        </span>
      </h1>
    );
  }
}
