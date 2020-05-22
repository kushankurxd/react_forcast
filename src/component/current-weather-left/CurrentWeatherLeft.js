import React from "react";

import "./CurrentWeatherLeft.css";

import { connect } from "react-redux";

import { dayOfWeekAsString, monthAsString } from "../../utils/dateAsString";
import iconSelector from "../../utils/iconSelector";

const nth = (d) => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const locationAndDate = (props) => {
  const dateUTC = new Date(props.date * 1000);
  const day = dayOfWeekAsString(dateUTC.getDay());
  const month = monthAsString(dateUTC.getMonth());
  const date = dateUTC.getDate();

  const finalDate = day + ", " + date + nth(date) + " " + month;

  return (
    <div className="current-weather__left">
      <div className="current-temperature__icon-container">
        <img
          src={iconSelector(props.icon)}
          className="current-temperature__icon"
          alt=""
        />
      </div>

      <div className="current-temperature__summary">{props.summary}</div>

      <div className="location-and-date__location">{props.location}</div>

      <div className="current-temperature__value">{props.temperature}&deg;C</div>

      <div className="location-and-date__date">{finalDate}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    icon: state.current.icon,
    temperature: state.current.temperature,
    summary: state.current.summary,
    location: state.current.location,
    date: state.current.date,
  };
};

export default connect(mapStateToProps)(locationAndDate);
