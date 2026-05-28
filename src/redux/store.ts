import { configureStore } from "@reduxjs/toolkit";
import sidemenuReducer from "./features/sidemenu-slice";

export const store = configureStore({
  reducer: { sidemenu: sidemenuReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
