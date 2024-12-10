import React from "react";
import s from "./pvzCard.module.scss";
export const PvzCard = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.topBlock}>
          <span>ул.Пушкина д.22</span>
          <span>Wildberries</span>
        </div>
        <span>9:00 - 18:00</span>
      </div>
    </div>
  );
};
