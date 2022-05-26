import React from "react";
import DateFormat from "./DateFormat";
import WeatherImages from "./WeatherImages";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>
              <span id="main-temp">{Math.round(props.data.temperature)}</span>
              <span>
                <a href="/" id="celcius-temp">
                  °C |
                </a>
                <a href="/" id="fahrenheit-temp">
                  °F
                </a>
              </span>
            </h1>
            <div className="float-left">
              <WeatherImages code={props.data.icon} />
            </div>
          </div>
          <div className="col-8" id="date-time">
            <ul>
              <li id="city-name">
                {props.data.city}, {props.data.country}
              </li>
              <li className="text-capitalize" id="weather-type">
                {props.data.weathertype}
              </li>
              <li id="date-format">
                <DateFormat date={props.data.date} />
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8"></div>
          <ul id="weather-desc">
            <li id="feelslike">
              Feels like: {Math.round(props.data.feelslike)}°C
            </li>
            <li id="humidity">Humidity: {props.data.humidity}%</li>
            <li id="windspeed">Wind Speed: {props.data.windspeed}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
