import React from "react";

import "./CurrentWeatherRight.css";

import { connect } from "react-redux";

const currentWeather = (props) => {
  const sunriseUTC = new Date(props.sunrise * 1000);
  const sunriseHours =
    (sunriseUTC.getHours() < 10 ? "0" : "") + sunriseUTC.getHours();
  const sunriseMinutes =
    (sunriseUTC.getMinutes() < 10 ? "0" : "") + sunriseUTC.getMinutes();
  const sunriseFullTime = sunriseHours + ":" + sunriseMinutes;

  const sunsetUTC = new Date(props.sunset * 1000);
  const sunsetHours =
    (sunsetUTC.getHours() < 10 ? "0" : "") + sunsetUTC.getHours();
  const sunsetMinutes =
    (sunsetUTC.getMinutes() < 10 ? "0" : "") + sunsetUTC.getMinutes();
  const sunsetFullTime = sunsetHours + ":" + sunsetMinutes;

  return (
    <div className="current-stats">
      <div>
        <div className="current-stats__value">{props.high}&deg;</div>
        <div className="current-stats__label">High</div>
        <div className="current-stats__value">{props.low}&deg;</div>
        <div className="current-stats__label">Low</div>
      </div>
      <div>
        <div className="current-stats__value">{props.wind}mph</div>
        <div className="current-stats__label">Wind</div>
        <div className="current-stats__value">{props.rain}%</div>
        <div className="current-stats__label">Rain</div>
      </div>
      <div>
        <div className="current-stats__value">{sunriseFullTime}</div>
        <div className="current-stats__label">Sunrise</div>
        <div className="current-stats__value">{sunsetFullTime}</div>
        <div className="current-stats__label">Sunset</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    high: state.current.high,
    low: state.current.low,
    wind: state.current.wind,
    rain: state.current.rain,
    sunrise: state.current.sunrise,
    sunset: state.current.sunset,
  };
};

export default connect(mapStateToProps)(currentWeather);
