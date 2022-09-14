import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <Icon code={props.data.weather[0].icon} size={70} color={"#bacbeb"} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-tmep-max">{maxTemperature()} </span>
        <span className="WeatherForecast-tmep-min">{minTemperature()} </span>
      </div>
    </div>
  );
}
