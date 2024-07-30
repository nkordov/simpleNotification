import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import notifyReducer from "./reducers/notifySlicer";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    notify: notifyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<Result = void> = ThunkAction<
  Result,
  RootState,
  unknown,
  Action<string>
>;

export default store;
