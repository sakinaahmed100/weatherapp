import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "./Reducer";
import { useEffect } from "react";
import axios from "axios";

const MyContext= createContext();

const initialState={
    value:"",
    loading:false,
    error:false,
    inputVal:"",
    data:"",
}
const MyContextProvider=({children})=>{

const [state,dispatch]= useReducer(reducer,initialState)

const URL= `https://api.openweathermap.org/data/2.5/weather?q=${state.inputVal}&appid=695b09f61ba14ea2bfbec2d347da4fca`

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      dispatch({ type: "LOADING" });

      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } catch (error) {
      console.log("Custom error:", error);
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  if (state.inputVal) {
    fetchData();
  }
}, [state.inputVal]);
const Search=(e)=>{
    const {value}=e.target
    dispatch({type:"SEARCH",payload:value})
}

const SearchButton=()=>{
  dispatch({type:"SEARCHBUTTON"})

}
return <MyContext.Provider value={{state,Search,SearchButton}}>{children}</MyContext.Provider>
}

const UseMyContext=()=>{
  return  useContext(MyContext)
}

export {UseMyContext,MyContextProvider}