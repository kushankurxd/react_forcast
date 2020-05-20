import * as actionTypes from "../actions/actionTypes";

const inititalState = {
  location: "",
  date: "",
  icon: "",
  temperature: "",
  summary: "",
  high: "",
  low: "",
  wind: "",
  rain: "",
  sunrise: "",
  sunset: "",
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CURRENT_WEATHER:
      const location = action.data.name + ", " + action.data.sys.country;
      const temperature = parseInt(action.data.main.temp - 273.15);
      const high = parseInt(action.data.main.temp_max - 273.15);
      const low = parseInt(action.data.main.temp_min - 273.15);
      const wind = parseInt(action.data.wind.speed * 2.2369362921);
      return {
        ...state,
        location: location,
        date: action.data.dt,
        icon: action.data.weather[0].icon,
        temperature: temperature,
        summary: action.data.weather[0].description,
        high: high,
        low: low,
        wind: wind,
        rain: action.data.clouds.all,
        sunrise: action.data.sys.sunrise,
        sunset: action.data.sys.sunset,
      };
    default:
      return state;
  }
};

export default reducer;
