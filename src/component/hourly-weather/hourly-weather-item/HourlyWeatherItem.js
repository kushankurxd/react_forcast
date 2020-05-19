import React from "react";

import "./HourlyWeatherItem.css";

const hourlyWeatherItem = (props) => {
  return (
    <div className="weather-by-hour__item">
      <div className="weather-by-hour__hour">{props.time}</div>
      <img
        src={props.icon}
        alt="Mostly sunny"
        className="weather-by-hour__icon"
      />
      <div>{props.temperature}&deg;</div>
    </div>
  );
};

export default hourlyWeatherItem;
