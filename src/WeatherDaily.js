import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import "./WeatherDaily.css";
import axios from "axios";

export default function WeatherDaily(props) {
  let [dailyReady, setDailyReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setDailyReady(true);
  }

  if (dailyReady) {
    return (
      <div className="WeatherDaily">
        <div className="row">
          <div className="col">
            <ForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "76bd1c0ff8311a8d7f2ae10658044361";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
