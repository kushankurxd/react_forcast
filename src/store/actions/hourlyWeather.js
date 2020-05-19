import * as actionTypes from "./actionTypes";
import Axios from "axios";

const initHourlyWeather = (data) => {
  return {
    type: actionTypes.INIT_HOURLY_WEATHER,
    data: data,
  };
};

export const initHourlyWeatherAsync = () => {
  return (dispatch) => {
    Axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?lat=23.849163&lon=86.901978&appid=0c5f6dbc0ecefe58edae3e8122fd4127"
    )
      .then((res) => dispatch(initHourlyWeather(res.data.list.slice(0,8))))
      .catch((err) => err);
  };
};
