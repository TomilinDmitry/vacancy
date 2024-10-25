import { Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import { MainPage } from "../pages/MainPage/MainPage";
import { Profile } from "../pages/Profile";
import { Vacancy } from "../pages/Vacancy/Vacancy";
import { SearchVacancy } from "../pages/SearchVacancy/SearchVacancy";

export const App = () => {
  return (
    <div className={s.App}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/vacancy' element={<Vacancy />} />
        <Route
          path='/vacancy/search-vacancy'
          element={<SearchVacancy />}
        />
      </Routes>
    </div>
  );
};
