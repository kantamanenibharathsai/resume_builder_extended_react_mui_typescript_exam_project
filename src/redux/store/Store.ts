import { configureStore } from "@reduxjs/toolkit";
import fromReducer from "../features/FormSlice"


export const store = configureStore({
  reducer: {
    formDetails: fromReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
