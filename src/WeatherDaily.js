import React from "react";
import WeatherImages from "./WeatherImages";
import "./WeatherDaily.css";

export default function WeatherDaily(props) {
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
