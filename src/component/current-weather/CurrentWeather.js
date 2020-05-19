import React from "react";

import "./CurrentWeather.css";

import { connect } from "react-redux";

import svg1 from "../../svg/01.svg";
import svg2 from "../../svg/02.svg";
import svg3 from "../../svg/03.svg";
import svg4 from "../../svg/04.svg";
import svg9 from "../../svg/09.svg";
import svg10 from "../../svg/10.svg";
import svg11 from "../../svg/11.svg";

const currentWeather = (props) => {
  const iconCode = props.icon.substring(0, 2);
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

  const sunriseUTC = new Date(props.sunrise * 1000);
  const sunriseHours = (sunriseUTC.getHours() < 10 ? "0" : "") +sunriseUTC.getHours();
  const sunriseMinutes =(sunriseUTC.getMinutes() < 10 ? "0" : "") +sunriseUTC.getMinutes();
  const sunriseFullTime = sunriseHours + ":" + sunriseMinutes;

  const sunsetUTC = new Date(props.sunset * 1000);
  const sunsetHours = (sunsetUTC.getHours() < 10 ? "0" : "") +sunsetUTC.getHours();
  const sunsetMinutes =(sunsetUTC.getMinutes() < 10 ? "0" : "") +sunsetUTC.getMinutes();
  const sunsetFullTime = sunsetHours + ":" + sunsetMinutes;


  return (
    <React.Fragment>
      <div className="current-temperature">
        <div className="current-temperature__icon-container">
          <img src={icon} className="current-temperature__icon" alt="" />
        </div>
        <div className="current-temperature__content-container">
          <div className="current-temperature__value">
            {props.temperature}&deg;
          </div>
          <div className="current-temperature__summary">{props.summary}</div>
        </div>
      </div>

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
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    icon: state.icon,
    temperature: state.temperature,
    summary: state.summary,
    high: state.high,
    low: state.low,
    wind: state.wind,
    rain: state.rain,
    sunrise: state.sunrise,
    sunset: state.sunset,
  };
};

export default connect(mapStateToProps)(currentWeather);
