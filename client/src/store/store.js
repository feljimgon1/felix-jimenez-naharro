import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentSectionReducer from "./reducers/currentSectionSlice";

const rootReducer = combineReducers({
    currentSection: currentSectionReducer
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};