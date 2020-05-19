const initialState = {
  data: [
    {
      time: "5 am",
      icon: "01",
      temperature: "24",
    },
    {
      time: "8 am",
      icon: "02",
      temperature: "24",
    },
    {
      time: "11 am",
      icon: "03",
      temperature: "24",
    },
    {
      time: "01 pm",
      icon: "09",
      temperature: "24",
    },
    {
      time: "03 pm",
      icon: "11",
      temperature: "24",
    },
    {
      time: "05 pm",
      icon: "01",
      temperature: "24",
    },
    {
      time: "08 pm",
      icon: "04",
      temperature: "24",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
