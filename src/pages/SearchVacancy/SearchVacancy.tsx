import React, { useState } from "react";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
import { Header } from "../../widgets/Header/Header";
import s from "./style.module.scss";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

export const SearchVacancy = () => {
  const [value, setValue] = useState();
  return (
    <Wrapper>
      <Header name='ПОИСК ВАКАНСИЙ' />
      <div className={s.container}>
        <div>
          <p className={s.description}>
            <span>
              Уважаемый соискатель на должность сотрудника пункта
              выдачи, прежде чем откликнуться на вакансию внимательно
              изучите карточку вакансии, особенно адрес пункта выдачи,
              оцените удаленность пункта выдачи от вашего места
              жительства и оцените свои возможности по своевременному
              приходу на будущее рабочее место, пожалуйста отнеситесь
              со всей ответственность к своему выбору. Одновременно у
              вас не может быть более 3х откликов в разные пункты
              выдачи
            </span>
          </p>
          <section>
            <h1 className={s.title}>Укажите город, район и улицу</h1>
          </section>
          <AddressSuggestions
            token='bcbe8a79e4b94cc3270a0204684977965ab06020'
            value={value}
            onChange={() => setValue}
          />
        </div>
        <button className={s.searchBtn}>ПОИСК</button>
      </div>
    </Wrapper>
  );
};
