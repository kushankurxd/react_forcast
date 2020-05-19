import React from "react";

import "./HourlyWeatherItem.css";

const hourlyWeatherItem = (props) => {
  const dateUTC = new Date(props.time * 1000);
  let hours = dateUTC.getHours();

  let time = null;
  if (hours > 12) {
    hours = hours - 12;
    time = hours + " pm";
  } else {
    time = hours + " am";
  }

  return (
    <div className="weather-by-hour__item">
      <div className="weather-by-hour__hour">{time}</div>
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
