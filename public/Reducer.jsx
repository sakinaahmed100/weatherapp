export const reducer = (state, action) => {
  switch (action.type) {

    case "LOADING":
      console.log("loading");
      return {
        ...state,
        loading: true,
        error:false,
      }

    case "FETCH_SUCCESS":{
      let data=action.payload
      console.log(action.payload);
      console.log(data.clouds.all);
      console.log(data.weather[0].description,data.main.feels_like,data.main.temp,data.main.temp_min,data.main.temp_max,data.wind.speed);
      console.log("hi");

      return {
        ...state,
        loading: false,
        error:false,
        data:data,
        clouds:data.clouds.all,
        weather:data.weather[0].description,
        temp:data.main.temp,
        max:data.main.temp_max,
        min:data.main.temp_min,
        wind:data.wind.speed,
        feels:data.main.feels_like

      }
    }
    case "SEARCH": {
      console.log(action.payload);
      let val = action.payload.toLowerCase()
      return {
        ...state,
        value: val,
      };
    }
    case "SEARCHBUTTON":

      return {
        ...state,
        inputVal: state.value,

      }
    case "FETCH_ERROR":
      console.log(action.payload);
      return {
        ...state,
        error:true,
      }


    default:
      return state;
  }
}; 