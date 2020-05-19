import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_HOURLY_WEATHER:
      const data = action.data.map((item) => ({
        time: item.dt,
        icon: item.weather[0].icon,
        temperature: parseInt(item.main.temp - 273.15),
      }));
      return {  
        data: data,
      };
    default:
      return state;
  }
};

export default reducer;
