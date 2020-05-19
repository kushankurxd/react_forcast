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
    props.onInitCurrentWeather();
    props.onInitHourlyWeather();
  }

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
    onInitCurrentWeather: () => dispatch(actions.initCurrentWeatherAsync()),
    onInitHourlyWeather: () => dispatch(actions.initHourlyWeatherAsync()),
  };
};

export default connect(null, mapDispatchToProps)(Weather);
