import React, { useState } from "react";
import { Wrapper } from "../../../widgets/Wrapper/Wrapper";
import { Header } from "../../../widgets/Header/Header";
import s from "./style.module.scss";
import {
  AddressSuggestions,
  DaDataAddress,
  DaDataSuggestion,
} from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import "./dadata.css";
import { Link } from "react-router-dom";
export const SearchUnderworking = () => {
  const [value, setValue] = useState<
    DaDataSuggestion<DaDataAddress> | undefined
  >();
  return (
    <Wrapper>
      <Header name='НАЙТИ ПОДРАБОТКУ' />
      <div className={s.container}>
        <div className={s.centerBlock}>
          <p className={s.description}>
            <span>
              Прежде чем откликнуться на ваканасии внимательно изучите
              карточку вакансии, особенно адрес пункта выдачи, оцените
              удаленность пункта выдачи от вашего места жительсва и
              оцените свои возможности по своевременному приходу на
              будущее рабочее место, пожалуйста отнеситесь со всей
              ответственностью к своему выбору. Одновремнно у Вас не
              может быть более 3х откликов на разные ПВ на одну дату.
              После подтверждения отклика собственником ПВЗ, все
              остальные ваши отклики на эту дату удаляются.
            </span>
          </p>
          <section>
            <h1 className={s.title}>Укажите город, район и улицу</h1>
          </section>
          <AddressSuggestions
            token='bcbe8a79e4b94cc3270a0204684977965ab06020'
            value={value}
            onChange={(newValue) => setValue(newValue)}
            delay={1000}
            selectOnBlur={true}
            count={5}
          />
        </div>
        {value?.value ? (
          <Link to='/underWorking/search-underworking/response-search'>
            <button
              className={value?.value ? s.searchBtn : s.notActive}
            >
              ПОИСК
            </button>
          </Link>
        ) : (
          <button className={s.notActive}>ПОИСК</button>
        )}
      </div>
    </Wrapper>
  );
};
