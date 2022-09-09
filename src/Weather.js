import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h2 className="location">
          {weatherData.city},{weatherData.country}
        </h2>
        <h3>Friday 12:00</h3>
        <div className="row">
          <div className="col-4">
            <img
              src="https://cdn.icon-icons.com/icons2/2791/PNG/512/partly_cloudy_day_sun_clouds_weather_icon_177560.png"
              width="100"
              alt="sun"
            />
          </div>
          <div className="col-4" id="temperature">
            {Math.round(weatherData.temperature)}°C
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity:{weatherData.humidity} %</li>
              <li>Description:{weatherData.description}</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4eba877dd9ec83758a66d7b35703d7cf";
    let city = "Kyiv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
