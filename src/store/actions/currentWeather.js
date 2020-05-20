import * as actionTypes from "./actionTypes";

import Axios from "axios";

const initCurrentWeather = (data) => {
  return {
    type: actionTypes.INIT_CURRENT_WEATHER,
    data: data,
  };
};

export const initCurrentWeatherAsync = (lat, lng) => {
  return (dispatch) => {
    Axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lng +
        "&appid=0c5f6dbc0ecefe58edae3e8122fd4127"
    )
      .then((res) => dispatch(initCurrentWeather(res.data)))
      .catch((err) => err);
  };
};
