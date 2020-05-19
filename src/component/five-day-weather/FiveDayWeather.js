import React from "react";

import "./FiveDayWeather.css";
import FiveDayWeatherItem from "./five-day-weather-item/FiveDayWeatherItem";

import iconSelector from "../../utils/iconSelector";

const fiveDayWeather = (props) => {
  return (
    <div className="next-5-days">
      <h2 className="next-5-days__heading">Next 5 days</h2>
      <div className="next-5-days__container">
        <FiveDayWeatherItem
          date="1589932800"
          icon={iconSelector("02d")}
          low="28"
          high="30"
          rain="80"
          wind="7"
        />
        <FiveDayWeatherItem
          date="1589932800"
          icon={iconSelector("02d")}
          low="28"
          high="30"
          rain="80"
          wind="7"
        />
        <FiveDayWeatherItem
          date="1589932800"
          icon={iconSelector("02d")}
          low="28"
          high="30"
          rain="80"
          wind="7"
        />
        <FiveDayWeatherItem
          date="1589932800"
          icon={iconSelector("02d")}
          low="28"
          high="30"
          rain="80"
          wind="7"
        />
      </div>
    </div>
  );
};

export default fiveDayWeather;
