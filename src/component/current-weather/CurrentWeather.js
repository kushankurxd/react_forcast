import React from "react";

import "./CurrentWeather.css";

const currentWeather = (props) => {
  return (
    <React.Fragment>
      <div className="current-temperature">
        <div className="current-temperature__icon-container">
          <img src={props.logo} className="current-temperature__icon" alt="" />
        </div>
        <div className="current-temperature__content-container">
          <div className="current-temperature__value">21&deg;</div>
          <div className="current-temperature__summary">Mostly Sunny</div>
        </div>
      </div>

      <div className="current-stats">
        <div>
          <div className="current-stats__value">23&deg;</div>
          <div className="current-stats__label">High</div>
          <div className="current-stats__value">14&deg;</div>
          <div className="current-stats__label">Low</div>
        </div>
        <div>
          <div className="current-stats__value">7mph</div>
          <div className="current-stats__label">Wind</div>
          <div className="current-stats__value">0%</div>
          <div className="current-stats__label">Rain</div>
        </div>
        <div>
          <div className="current-stats__value">05:27</div>
          <div className="current-stats__label">Sunrise</div>
          <div className="current-stats__value">20:57</div>
          <div className="current-stats__label">Sunset</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default currentWeather;
