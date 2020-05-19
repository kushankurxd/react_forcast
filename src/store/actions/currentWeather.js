import * as actionTypes from "./actionTypes";

import Axios from "axios";

const initCurrentWeather = (data) => {
  return {
    type: actionTypes.INIT_CURRENT_WEATHER,
    data: data,
  };
};

export const initCurrentWeatherAsync = () => {
  return (dispatch) => {
    Axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=23.849163&lon=86.901978&appid=0c5f6dbc0ecefe58edae3e8122fd4127"
    )
      .then((res) => dispatch(initCurrentWeather(res.data)))
      .catch((err) => err);
  };
};
