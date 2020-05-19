import React from "react";

import "./FiveDayWeatherItem.css";

import { dayOfWeekAsString } from "../../../utils/dateAsString";

const fiveDayWeatherItem = (props) => {
  const dateUTC = new Date(props.date * 1000);
  const day = dayOfWeekAsString(dateUTC.getDay()).substring(0, 3);
  const month = dateUTC.getMonth();
  const date = dateUTC.getDate();

  return (
    <div className="next-5-days__row">
      <div className="next-5-days__date">
        {day}
        <div className="next-5-days__label">
          {date}/{month}
        </div>
      </div>

      <div className="next-5-days__low">
        {props.low}&deg;
        <div className="next-5-days__label">Low</div>
      </div>

      <div className="next-5-days__high">
        {props.high}&deg;
        <div className="next-5-days__label">High</div>
      </div>

      <div className="next-5-days__icon">
        <img src={props.icon} alt="Sunny" />
      </div>

      <div className="next-5-days__rain">
        {props.rain}%<div className="next-5-days__label">Rain</div>
      </div>

      <div className="next-5-days__wind">
        {props.wind}mph
        <div className="next-5-days__label">Wind</div>
      </div>
    </div>
  );
};

export default fiveDayWeatherItem;
