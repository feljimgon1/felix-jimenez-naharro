import {
  combineReducers,
  configureStore,
  applyMiddleware
} from "@reduxjs/toolkit";
import thunk from "redux-thunk" 
import balanceReducer from '../redux/slices/balanceSlice'
import registerReducer from '../redux/slices/registerSlice'

const rootReducer = combineReducers({
  register: registerReducer,
  balance: balanceReducer,
});

export const store = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  }, applyMiddleware(thunk));
};