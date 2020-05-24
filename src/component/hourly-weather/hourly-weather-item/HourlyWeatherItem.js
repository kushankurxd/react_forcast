import React from "react";

import "./HourlyWeatherItem.css";

const hourlyWeatherItem = (props) => {
  const dateUTC = new Date(props.time * 1000);
  let hours = dateUTC.getHours();

  let time = null;
  if (hours > 12) {
    hours = hours - 12;
    time = hours + " PM";
  } else {
    time = hours + " AM";
  }

  return (
    <div className="weather-by-hour__item">
      <div className="weather-by-hour__hour">{time}</div>
      <img
        src={props.icon}
        alt="Mostly sunny"
        className="weather-by-hour__icon"
      />
      <div className="weather-by-hour__temperature">{props.temperature}&deg;C</div>
    </div>
  );
};

export default hourlyWeatherItem;
