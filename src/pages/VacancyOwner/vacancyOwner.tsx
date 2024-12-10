import React from "react";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
import { Header } from "../../widgets/Header/Header";
import s from "./vacancyOwner.module.scss";
import { Link } from "react-router-dom";
export const VacancyOwner = () => {
  return (
    <Wrapper owner>
      <Header name='ВАКАНСИИ' owner />
      <div className={s.container}>
        <Link to='/owner/vacancy/create'>
          <button className={s.buttonVacancy}>
            Создание вакансий
          </button>
        </Link>
        <Link to='/owner/vacancy/active-work'>
          <button className={s.buttonVacancy}>
            Активные вакансии на
            <br /> постоянную работу
          </button>
        </Link>
        <Link to='/owner/vacancy/active-underwork'>
          <button className={s.buttonVacancy}>
            Активные вакансии на подработку
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};
