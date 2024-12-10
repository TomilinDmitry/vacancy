import { Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import { MainPage } from "../pages/MainPage/MainPage";
import { Profile } from "../pages/Profile";
import { Vacancy } from "../pages/Vacancy/Vacancy";
import { SearchVacancy } from "../pages/Vacancy/SearchVacancy/SearchVacancy";
import { MyResponse } from "../pages/Vacancy/MyResponse/MyResponse";
import { ResponseSearch } from "../pages/Vacancy/SearchVacancy/ResponseSearch/ResponseSearch";
import { UnderWorking } from "../pages/UnderWorking/underWorking";
import { SearchUnderworking } from "../pages/UnderWorking/searchUnderworking/SearchUnderWorking";
import { ResponseSearchUnderworking } from "../pages/UnderWorking/searchUnderworking/ResponseSearch/ResponseSearch";
import { MyResponseUnderworking } from "../pages/UnderWorking/MyResponseUnderworking/MyResponseUnderWorking";
import { UnderworkingCalendar } from "../pages/UnderWorking/UnderworkingCalendar/UnderworkingCalendar";
import { MainPageOwner } from "../pages/MainPageOwner/MainPageOwner";
import { MyPvz } from "../pages/MyPvz/myPvz";
import { AddPvzForm } from "../widgets/AddPvzForm/addPvzForm";
import { VacancyOwner } from "../pages/VacancyOwner/vacancyOwner";
import { CreateVacancy } from "../pages/VacancyOwner/Create/CreateVacancy";
import { Work } from "../pages/VacancyOwner/Create/Work/Work";
import { UnderWork } from "../pages/VacancyOwner/Create/UnderWork/underWork";
import { ActiveWork } from "../pages/VacancyOwner/ActiveWork/ActiveWork";
import { ActiveUnderwork } from "../pages/VacancyOwner/ActiveUnderwork/ActiveUnderwork";
import { VacacncyResponses } from "../pages/VacancyOwner/VacancyResponse/VacancyResponse";
import { CheckEmployee } from "../pages/CheckEmployee/CheckEmployee";
import { Survey } from "../pages/Survey/Survey";
import { RatingPvz } from "../pages/RatingPvz/RatingPvz";
import { Communication } from "../pages/Communication/Communication";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { getUserProfile } from "./service/api/mainApi";
import { useDispatch, useSelector } from "./service/hooks/hooks";

export const App = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.register);
  useEffect(() => {
    if (userData) return;
    const fetchData = async () => {
      await getUserProfile(dispatch);
    };
    fetchData();
  }, [dispatch, userData]);

  return (
    <div className={s.App}>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/home' element={<MainPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/vacancy' element={<Vacancy />} />
        <Route
          path='/vacancy/search-vacancy'
          element={<SearchVacancy />}
        />
        <Route
          path='/vacancy/search-vacancy/response-search'
          element={<ResponseSearch />}
        />
        <Route path='/vacancy/my-response' element={<MyResponse />} />
        <Route path='/underWorking' element={<UnderWorking />} />
        <Route
          path='/underWorking/search-underworking'
          element={<SearchUnderworking />}
        />
        <Route
          path='/underWorking/search-underworking/response-search'
          element={<ResponseSearchUnderworking />}
        />
        <Route
          path='/underWorking/my-response'
          element={<MyResponseUnderworking />}
        />
        <Route
          path='/underWorking/calendar'
          element={<UnderworkingCalendar />}
        />
        <Route path='/surveys' element={<Survey />} />
        <Route path='/rating-owner' element={<RatingPvz />} />
        {/* Owner */}
        <Route path='/owner' element={<MainPageOwner />} />
        <Route path='/owner/owner-profile' element={<Profile />} />
        <Route path='/owner/my-pvz' element={<MyPvz />} />
        <Route path='/owner/my-pvz/add' element={<AddPvzForm />} />
        <Route path='/owner/vacancy' element={<VacancyOwner />} />
        <Route
          path='/owner/vacancy/create'
          element={<CreateVacancy />}
        />
        <Route path='/owner/vacancy/create/work' element={<Work />} />
        <Route
          path='/owner/vacancy/create/underwork'
          element={<UnderWork />}
        />
        <Route
          path='/owner/vacancy/active-work'
          element={<ActiveWork />}
        />
        <Route
          path='/owner/vacancy/active-underwork'
          element={<ActiveUnderwork />}
        />
        <Route
          path='/owner/vacancy/responses'
          element={<VacacncyResponses />}
        />
        <Route
          path='/owner/check-employee'
          element={<CheckEmployee />}
        />
        <Route path='/owner/surveys' element={<Survey owner />} />
        <Route
          path='/owner/rating-employee'
          element={<RatingPvz owner />}
        />
        <Route
          path='/owner/communication'
          element={<Communication />}
        />
      </Routes>
      <ToastContainer
        position='top-left'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};
