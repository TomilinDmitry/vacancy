import React from "react";
import { Wrapper } from "../../../widgets/Wrapper/Wrapper";
import { Header } from "../../../widgets/Header/Header";
import s from "./vacancyResponse.module.scss";
import { VacancyResponseCard } from "../../../shared/VacancyResponseCard/VacacncyResponseCard";
export const VacacncyResponses = () => {
  return (
    <Wrapper owner>
      <Header name='ОТКЛИКИ' owner />
      <div className={s.container}>
        <VacancyResponseCard />
        <VacancyResponseCard />
        <VacancyResponseCard />
        <VacancyResponseCard />
      </div>
    </Wrapper>
  );
};
