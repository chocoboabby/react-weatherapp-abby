import React from "react";
import WeatherImages from "./WeatherImages";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function dayOfTheWeek() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="weatherdaily-day">{dayOfTheWeek()}</div>
      <WeatherImages code={props.data.weather[0].icon} size={45} />
      <div className="weatherdaily-temperature">
        <span className="max-temp">{maxTemp()}</span>
        <span className="separator"> | </span>
        <span className="min-temp">{minTemp()}</span>
      </div>
    </div>
  );
}
