import React from "react";
import Icon from "./Icon";
import "./WeatherForecas.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <Icon code="01d" size={70} color={"#bacbeb"} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-tmep-max">19° </span>
            <span className="WeatherForecast-tmep-min">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
