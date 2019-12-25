import { combineReducers } from "redux";
import {LoginReducer}  from "../container/Login/Reducer/Reducers";
// import {reportDataReducer}  from "../container/HomeCollection/Report/Reducer/Reducer";

const combinedReducer = combineReducers(
  {login: LoginReducer});
export default combinedReducer;