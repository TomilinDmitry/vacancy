import React from "react";
import s from "./response.module.scss";
export const Response = ({
  state,
  button,
}: {
  state?: string;
  button?: boolean;
}) => {
  const pending = state === "pending";
  const viewed = state === "viewed";
  const approved = state === "approved";
  const rejected = state === "rejected";
  const respond = state === "respond";

  let buttonClass = s.responseButton;
  let buttonText = "Отклик не просмотрен";

  if (pending) {
    buttonClass += ` ${s.responseButton}`;
    buttonText = "Отклик не просмотрен";
  } else if (viewed) {
    buttonClass += ` ${s.viewed}`;
    buttonText = "Отклик просмотрен";
  } else if (approved) {
    buttonClass += ` ${s.approved}`;
    buttonText = "Отклик одобрен";
  } else if (rejected) {
    buttonClass += ` ${s.rejected}`;
    buttonText = "Отклик отклонен";
  } else if (respond) {
    buttonClass += ` ${s.respond}`;
    buttonText = "Откликнутся";
  }
  return (
    <li className={button ? s.responseElement : s.smallEmelent}>
      <div className={s.header}>
        <span>Ул.Пушкина д.19</span>
        <span>4.9</span>
      </div>
      <span className={s.pay}>2500₽/день</span>
      <div className={s.main}>
        <span>Выдача в день: 500 шт.</span>
        <span>9:00-21:00</span>
      </div>
      {button && (
        <button className={buttonClass}>{buttonText}</button>
      )}
    </li>
  );
};
