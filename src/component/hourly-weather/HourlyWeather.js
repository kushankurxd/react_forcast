import React from "react";

import "./HourlyWeather.css";

import HourlyWeatherItem from "./hourly-weather-item/HourlyWeatherItem";

import svg1 from "../../svg/01.svg";
import svg2 from "../../svg/02.svg";
import svg3 from "../../svg/03.svg";
import svg4 from "../../svg/04.svg";
import svg9 from "../../svg/09.svg";
import svg10 from "../../svg/10.svg";
import svg11 from "../../svg/11.svg";

import { connect } from "react-redux";

const hourlyWeather = (props) => {
  const weatherItems = props.data.map((item, index) => (
    <HourlyWeatherItem
      key={index}
      time={item.time}
      icon={weatherIcon(item.icon)}
      temperature={item.temperature}
    />
  ));

  return (
    <div className="weather-by-hour">
      <h2 className="weather-by-hour__heading">Today's weather</h2>
      <div className="weather-by-hour__container">{weatherItems}</div>
    </div>
  );
};

const weatherIcon = (iconString) => {
  const iconCode = iconString.substring(0, 2);
  let icon = null;
  switch (iconCode) {
    case "01":
      icon = svg1;
      break;
    case "02":
      icon = svg2;
      break;
    case "03":
      icon = svg3;
      break;
    case "04":
      icon = svg4;
      break;
    case "09":
      icon = svg9;
      break;
    case "10":
      icon = svg10;
      break;
    case "11":
      icon = svg11;
      break;
    default:
      icon = null;
  }
  return icon;
};

const mapStateToProps = (state) => {
  return {
    data: state.hourly.data,
  };
};

export default connect(mapStateToProps)(hourlyWeather);
