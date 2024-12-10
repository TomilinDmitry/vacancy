import React from "react";
import { Wrapper } from "../../../widgets/Wrapper/Wrapper";
import { Header } from "../../../widgets/Header/Header";
import { VacancyCard } from "../../../shared/VacancyCard/VacancyCard";
import s from "./activeUnderwork.module.scss";
export const ActiveUnderwork = () => {
  return (
    <Wrapper owner>
      <Header name='ВАКАНСИИ НА ПОДРАБОТКУ' owner />
      <div className={s.container}>
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
      </div>
    </Wrapper>
  );
};
