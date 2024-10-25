import React from "react";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
import { Header } from "../../widgets/Header/Header";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
export const Vacancy = () => {
  return (
    <Wrapper>
      <Header name='ВАКАНСИИ' />
      <div className={s.container}>
        <Link to='/vacancy/search-vacancy'>
          <button className={s.buttonVacancy}>Поиск вакансий</button>
        </Link>
        <button className={s.buttonVacancy}>Мои отлики</button>
      </div>
    </Wrapper>
  );
};
