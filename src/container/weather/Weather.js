import React from "react";

import "./Weather.css";

import LocationAndDate from "../../component/location-and-date/LocationAndDate";
import CurrentWeather from "../../component/current-weather/CurrentWeather";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    props.onInitCurrentWeather();
  }

  render() {
    return (
      <div className="body">
        <div className="main-container">
          <LocationAndDate />
          <CurrentWeather />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitCurrentWeather: () =>
      dispatch({ type: actionTypes.INIT_CURRENT_WEATHER }),
  };
};

export default connect(null, mapDispatchToProps)(Weather);
