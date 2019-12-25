import { createStore, applyMiddleware } from "redux";
import combinedReducer from "./CombineReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";

const initialState = {};
// console.log(combinedReducer)
const middlewares = applyMiddleware(thunk);
// const sagaMiddleware = createSagaMiddleware();
// const combinedReducerss = combineReducers({login: LoginReducer},{data:helloWorldReducer});
const store = createStore(combinedReducer
  ,initialState,composeWithDevTools(middlewares));
// store.subscribe(() => {
//   console.log(store.getState());
// })
export default store;