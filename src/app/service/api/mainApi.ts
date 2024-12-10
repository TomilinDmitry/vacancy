/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { TApplicantProfile, TUserData } from "../../types/type";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  setApplicantData,
  setUserData,
} from "../slices/registrationSlice";
export const defaultInstance = axios.create({
  baseURL: "https://pvz-vacancies.bxcv.ru/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
export const authInstance = axios.create({
  baseURL: "https://pvz-vacancies.bxcv.ru/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwidHlwZSI6IkFQUExJQ0FOVCIsImV4cCI6MTczMzE4ODQzOX0.ZaeWiLu7gxvFrPgxiDpGoT7KONm41qzFCB8bnGou6QQ`,
  },
});

export const registerUser = async (
  userData: TUserData,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: any,
): Promise<TUserData | null> => {
  try {
    const response = await defaultInstance.post<TUserData>(
      `/auth/register`,
      userData,
    );

    console.log("Успешная регистрация:", response.data);
    dispatch(setUserData(response.data));
    toast.success("Аккаунт успешно создан");
    setTimeout(() => {
      window.location.href = "/home";
    });
    return response.data;
  } catch (error) {
    toast.error("Ошибка при регистрации пользователя:");
    return null;
  }
};

export const getUserProfile = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: any,
): Promise<TApplicantProfile | null> => {
  try {
    const response = await authInstance.get<TApplicantProfile>(
      `/applicant/profile`,
    );

    // console.log("Успешная регистрация:", response.data);
    dispatch(setApplicantData(response.data));
    // toast.success("Аккаунт успешно создан");
    // setTimeout(() => {
    //   window.location.href = "/home";
    // });
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // toast.error("Ошибка при регистрации пользователя:");
    return null;
  }
};
export const updateUserProfile = async (
  updatedDataProfile: TApplicantProfile,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: any,
): Promise<TApplicantProfile | null> => {
  try {
    const response = await authInstance.post<TApplicantProfile>(
      `/applicant/profile`,
      updatedDataProfile,
    );

    // console.log("Успешная регистрация:", response.data);
    dispatch(setApplicantData(response.data));
    // toast.success("Аккаунт успешно создан");
    // setTimeout(() => {
    //   window.location.href = "/home";
    // });
    return response.data;
  } catch (error) {
    // toast.error("Ошибка при регистрации пользователя:");
    return null;
  }
};
