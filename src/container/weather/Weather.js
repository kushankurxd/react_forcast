import React from "react";

import "./Weather.css";

import CurrentWeatherLeft from "../../component/current-weather-left/CurrentWeatherLeft";
import CurrentWeatherRight from "../../component/current-weather-right/CurrentWeatherRight";
import HourlyWeather from "../../component/hourly-weather/HourlyWeather";

import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import FiveDayWeather from "../../component/five-day-weather/FiveDayWeather";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.getGeolocation();
  }

  getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.props.onInitCurrentWeather(
          position.coords.latitude,
          position.coords.longitude
        );
        this.props.onInitHourlyWeather(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    }
  };

  render() {
    return (
      <div className="body">
        <div className="background"></div>
        <div className="main-container">
          <CurrentWeatherLeft />
          <CurrentWeatherRight />
          <HourlyWeather />
          <FiveDayWeather />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCurrentWeather: (lat, lng) =>
      dispatch(actions.initCurrentWeatherAsync(lat, lng)),
    onInitHourlyWeather: (lat, lng) =>
      dispatch(actions.initHourlyWeatherAsync(lat, lng)),
  };
};

export default connect(null, mapDispatchToProps)(Weather);
