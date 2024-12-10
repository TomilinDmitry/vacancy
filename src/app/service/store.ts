import { configureStore } from "@reduxjs/toolkit";
import telegramSlice from "./slices/TelegramData";
import registerSlice from "./slices/registrationSlice";

export const store = configureStore({
  reducer: {
    telegram: telegramSlice,
    register: registerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
