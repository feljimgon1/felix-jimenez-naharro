import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};