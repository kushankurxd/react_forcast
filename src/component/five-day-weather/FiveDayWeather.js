import React from "react";

import "./FiveDayWeather.css";
import FiveDayWeatherItem from "./five-day-weather-item/FiveDayWeatherItem";

import iconSelector from "../../utils/iconSelector";

import { connect } from "react-redux";

const fiveDayWeather = (props) => {
  const weatherItems = props.data.map((item, index) => (
    <FiveDayWeatherItem
      key={index}
      date={item.date}
      icon={iconSelector(item.icon)}
      low={item.low}
      high={item.high}
      rain={item.rain}
      wind={item.wind}
    />
  ));
  return (
    <div className="next-5-days">
      <h2 className="next-5-days__heading">Next 5 days</h2>
      <div className="next-5-days__container">{weatherItems}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.hourly.fiveDaysData,
  };
};

export default connect(mapStateToProps)(fiveDayWeather);
