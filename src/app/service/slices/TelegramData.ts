import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { TTelegramData, TTelegramState } from "../../types/type";

const initialState: TTelegramState = {
  userTelegram: null,
};

export const telegramSlice = createSlice({
  name: "telegram",
  initialState,
  reducers: {
    setUserTelegram(state, action: PayloadAction<TTelegramData>) {
      state.userTelegram = action.payload;
    },
  },
});

export const { setUserTelegram } = telegramSlice.actions;

export default telegramSlice.reducer;
