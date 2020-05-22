import * as actionTypes from "../actions/actionTypes";

const inititalState = {
  location: "",
  date: "",
  icon: "",
  temperature: "",
  summary: "",
  humidity: "",
  airPressure: "",
  wind: "",
  rain: "",
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CURRENT_WEATHER:
      const location = action.data.name + ", " + action.data.sys.country;
      const temperature = parseInt(action.data.main.temp - 273.15);
      const airPressure = (action.data.main.pressure * 0.0145038).toFixed(3);
      const wind = parseInt(
        action.data.wind.speed * 2.2369362921 * 1.609344
      ).toFixed(1);
      return {
        ...state,
        location: location,
        date: action.data.dt,
        icon: action.data.weather[0].icon,
        temperature: temperature,
        summary: action.data.weather[0].main,
        humidity: action.data.main.humidity,
        airPressure: airPressure,
        wind: wind,
        rain: action.data.clouds.all,
      };
    default:
      return state;
  }
};

export default reducer;
