import React from "react";

import "./CurrentWeatherRight.css";

import { connect } from "react-redux";

import humidity from "../../svg/humidity.svg";
import airPressure from "../../svg/air-pressure.svg";
import rain from "../../svg/rain.svg";
import wind from "../../svg/wind.svg";

const currentWeather = (props) => {

  return (
    <div className="current-stats">
      <div className="current-stats___conatiner">
        <div className="current-stat">
          <div className="current-stat__icon">
            <img src={humidity} alt=""/>
          </div>
          <div className="current-stat_annot">
            <div className="current-stat__label">Humidity</div>
            <div className="current-stat__value">{props.humidity} %</div>
          </div>
        </div>

        <div className="current-stat">
          <div className="current-stat__icon">
            <img src={airPressure} alt=""/>
          </div>
          <div className="current-stat_annot">
            <div className="current-stat__label">Air Pressure</div>
            <div className="current-stat__value">{props.airPressure} PS</div>
          </div>
        </div>

        <div className="current-stat">
          <div className="current-stat__icon">
            <img src={rain} alt=""/>
          </div>
          <div className="current-stat_annot">
            <div className="current-stat__label">Chance of Rain</div>
            <div className="current-stat__value">{props.rain} %</div>
          </div>
        </div>

        <div className="current-stat">
          <div className="current-stat__icon">
            <img src={wind} alt=""/>
          </div>
          <div className="current-stat_annot">
            <div className="current-stat__label">Wind Speed</div>
            <div className="current-stat__value">{props.wind} km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    humidity: state.current.humidity,
    airPressure: state.current.airPressure,
    wind: state.current.wind,
    rain: state.current.rain,
  };
};

export default connect(mapStateToProps)(currentWeather);
