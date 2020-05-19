import React from "react";

import "./LocationAndDate.css";

import { connect } from "react-redux";

import {dayOfWeekAsString, monthAsString} from "../../utils/dateAsString";

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

  const finalDate = day + " " + date + nth(date) + " " + month;

  return (
    <div className="location-and-date">
      <h1 className="location-and-date__location">{props.location}</h1>
      <div>{finalDate}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.current.location,
    date: state.current.date,
  };
};

export default connect(mapStateToProps)(locationAndDate);
