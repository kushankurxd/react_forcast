import * as actionTypes from "../actions/actionTypes";

const initialState = {
  hourlyData: [],
  fiveDaysData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_HOURLY_WEATHER:
      const hourlyData = action.data.map((item) => ({
        time: item.dt,
        icon: item.weather[0].icon,
        temperature: parseInt(item.main.temp - 273.15),
      }));
      return {
        ...state,
        hourlyData: hourlyData,
      };
    case actionTypes.INIT_FIVE_DAY_WEATHER:
      const fiveDaysData = action.data.map((item) => ({
        date: item.dt,
        icon: item.weather[0].icon,
        low: parseInt(item.main.feels_like - 273.15),
        high: parseInt(item.main.temp_max - 273.15),
        rain: item.clouds.all,
        wind: parseInt(item.wind.speed * 2.2369362921),
      }));
      return {
        ...state,
        fiveDaysData: fiveDaysData,
      };
    default:
      return state;
  }
};

export default reducer;
