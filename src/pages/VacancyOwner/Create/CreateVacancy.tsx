import React from "react";
import { Wrapper } from "../../../widgets/Wrapper/Wrapper";
import { Header } from "../../../widgets/Header/Header";
import { Link } from "react-router-dom";
import s from "./createVacancy.module.scss";
export const CreateVacancy = () => {
  return (
    <Wrapper owner>
      <Header name='СОЗДАНИЕ ВАКАНСИЙ' owner />
      <div className={s.container}>
        <Link to='/owner/vacancy/create/work'>
          <button className={s.buttonVacancy}>
            На постоянную работу
          </button>
        </Link>
        <Link to='/owner/vacancy/create/underwork'>
          <button className={s.buttonVacancy}>
            Подработка на одну смену
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};
