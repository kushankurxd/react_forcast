import React from "react";

import "./LocationAndDate.css";

import { connect } from "react-redux";

const locationAndDate = (props) => {
  return (
    <div className="location-and-date">
      <h1 className="location-and-date__location">{props.location}</h1>
      <div>{props.date}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    location: state.location,
    date: state.date,
  };
};

export default connect(mapStateToProps)(locationAndDate);
