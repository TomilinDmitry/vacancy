import React from "react";
import { Wrapper } from "../../../widgets/Wrapper/Wrapper";
import { Header } from "../../../widgets/Header/Header";
import s from "./activeWork.module.scss";
import { VacancyCard } from "../../../shared/VacancyCard/VacancyCard";
export const ActiveWork = () => {
  return (
    <Wrapper owner>
      <Header name='ВАКАНСИИ НА ПОСТОЯННУЮ РАБОТУ' owner />
      <div className={s.container}>
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
      </div>
    </Wrapper>
  );
};
