import React from "react";
import WeatherImages from "./WeatherImages";
import "./WeatherDaily.css";
import axios from "axios";

export default function WeatherDaily(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "76bd1c0ff8311a8d7f2ae10658044361";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherDaily">
      <div className="row">
        <div className="col">
          <div className="weatherdaily-day">Thu</div>
          <WeatherImages code="13d" size={45} />
          <div className="weatherdaily-temperature">
            <span className="max-temp">19°</span>
            <span className="separator"> | </span>
            <span className="min-temp">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
