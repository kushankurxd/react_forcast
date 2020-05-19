import React from "react";

import "./Weather.css";

import svg1 from "../../svg/01.svg";
import svg2 from "../../svg/02.svg";
import svg3 from "../../svg/03.svg";
import svg4 from "../../svg/04.svg";
import svg9 from "../../svg/09.svg";
import svg10 from "../../svg/10.svg";
import svg11 from "../../svg/11.svg";

import LocationAndDate from "../../component/location-and-date/LocationAndDate";
import CurrentWeather from "../../component/current-weather/CurrentWeather";

class Weather extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="main-container">
          <LocationAndDate />
          <CurrentWeather  logo={svg1}/>
        </div>
      </div>
    );
  }
}

export default Weather;
