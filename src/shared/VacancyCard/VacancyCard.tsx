import React from "react";
import s from "./vacancy.module.scss";
export const VacancyCard = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <span>ул.Пушкина д.19</span>
        <span className={s.responses}> откликов: 6 </span>
      </div>
      <div className={s.main}>
        <span>2500P / день</span>
        <span>400 шт / день</span>
      </div>
      <div className={s.bottom}>
        <span>Время работы: 10:00 - 20:00</span>
      </div>

      <button
        className={s.responseButon}
        onClick={() =>
          (window.location.pathname = "/owner/vacancy/responses")
        }
      >
        Посмотреть отклики
      </button>
    </div>
  );
};
