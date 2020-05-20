import React from "react";

import "./Weather.css";

import LocationAndDate from "../../component/location-and-date/LocationAndDate";
import CurrentWeather from "../../component/current-weather/CurrentWeather";
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
        <div className="main-container">
          <LocationAndDate />
          <CurrentWeather />
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
