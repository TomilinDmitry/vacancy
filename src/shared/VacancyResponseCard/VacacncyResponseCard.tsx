import React, { useState } from "react";
import s from "./vacancyResponse.module.scss";
import {
  ButtonStyledOwnerBlue,
  ButtonStyledOwnerPurple,
} from "../../app/service/styledComponent/styled";
export const VacancyResponseCard = ({
  buttons,
  owner,
  setOpen,
}: {
  buttons: boolean;
  owner: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <span>Иван Петров</span>
        <span className={s.responses}> 21.01.2001 </span>
      </div>
      <div className={s.main}>
        <span>ул.Калинина д.7</span>
        <span>Рейтинг: 7.0</span>
      </div>
      <div className={s.bottom}>
        <span>Опыт работы: WB,Яндекс.Маркет,OZON</span>
      </div>
      {!buttons ? (
        <div className={s.buttonsContainer}>
          <button className={s.agreeButton}>Одобрить</button>
          <button className={s.denyButton}>Отказать</button>
          <button className={s.waitButton}>Отложить</button>
        </div>
      ) : owner ? (
        <ButtonStyledOwnerPurple onClick={() => setOpen(true)}>
          Оценить
        </ButtonStyledOwnerPurple>
      ) : (
        <ButtonStyledOwnerBlue onClick={() => setOpen(true)}>
          Оценить
        </ButtonStyledOwnerBlue>
      )}
    </div>
  );
};
