import React from "react";

import "./HourlyWeather.css";

import HourlyWeatherItem from "./hourly-weather-item/HourlyWeatherItem";
import iconSelector from "../../utils/iconSelector";

import { connect } from "react-redux";

const hourlyWeather = (props) => {
  const weatherItems = props.data.map((item, index) => (
    <HourlyWeatherItem
      key={index}
      time={item.time}
      icon={iconSelector(item.icon)}
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

const mapStateToProps = (state) => {
  return {
    data: state.hourly.data,
  };
};

export default connect(mapStateToProps)(hourlyWeather);
