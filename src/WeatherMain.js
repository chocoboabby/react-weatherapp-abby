import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./WeatherMain.css";

export default function WeatherMain(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setweatherData] = useState({ ready: false });
  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      weathertype: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      feelslike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      windspeed: response.data.wind.speed,
      icon: `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/035/192/original/3050031.png?1653472780`,
      icondescription: "",
    });
  }

  function search() {
    let apiKey = "76bd1c0ff8311a8d7f2ae10658044361";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherMain">
        <form id="city-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            id="city-input"
            onChange={handleCityChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-outline-dark search-btn"
          />
          <i className="fa-solid fa-map-pin location-pin"></i>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
