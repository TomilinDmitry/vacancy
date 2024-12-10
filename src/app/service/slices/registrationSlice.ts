import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import {
  TApplicantProfile,
  TRegistrationState,
  TUserData,
} from "../../types/type";

const initialState: TRegistrationState = {
  activeTab: "APPLICANT",
  experience:
    JSON.parse(localStorage.getItem("userData") || "{}").experience ||
    false,
  marketplaces:
    JSON.parse(localStorage.getItem("userData") || "{}")
      .marketplaces || [],
  userData: JSON.parse(localStorage.getItem("userData") || "null"),
  applicantData: JSON.parse(
    localStorage.getItem("applicantData") || "null",
  ),
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setActiveTab(
      state,
      action: PayloadAction<"APPLICANT" | "OWNER">,
    ) {
      state.activeTab = action.payload;
    },
    setExperience(state, action: PayloadAction<boolean>) {
      state.experience = action.payload;
    },
    setMerketplaces(state, action: PayloadAction<string>) {
      const index = state.marketplaces.indexOf(action.payload);
      if (index !== -1) {
        // Если значение есть, удаляем его
        state.marketplaces.splice(index, 1);
      } else {
        // Если значения нет, добавляем его
        state.marketplaces.push(action.payload);
      }
    },
    setUserData(state, action: PayloadAction<TUserData>) {
      state.userData = action.payload;
      localStorage.setItem(
        "userData",
        JSON.stringify(action.payload),
      ); // Сериализуем данные
    },
    setApplicantData(
      state,
      action: PayloadAction<TApplicantProfile>,
    ) {
      state.applicantData = action.payload;
      localStorage.setItem(
        "applicantData",
        JSON.stringify(action.payload),
      ); // Сериализуем данные
    },
  },
});

export const {
  setActiveTab,
  setExperience,
  setMerketplaces,
  setUserData,
  setApplicantData,
} = registerSlice.actions;

export default registerSlice.reducer;
