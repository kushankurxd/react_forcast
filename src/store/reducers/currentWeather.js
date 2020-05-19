import * as actionTypes from "../actions/actionTypes";

const inititalState = {
  location: "Chittaranjan, IN",
  date: "Wednesday, 20th May",
  icon: "11d",
  temperature: "31",
  summary: "Cloudy",
  high: "34",
  low: "28",
  wind: "12",
  rain: "70",
  sunrise: "05:32",
  sunset: "18:20",
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CURRENT_WEATHER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
