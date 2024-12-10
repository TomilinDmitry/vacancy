import React from "react";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
import { Header } from "../../widgets/Header/Header";
import { Link } from "react-router-dom";
import s from "./communication.module.scss";
export const Communication = () => {
  return (
    <Wrapper owner>
      <Header name='Связь с другим ПВЗ' owner />
      <div className={s.container}>
        <Link to='/owner/communication/outgoing'>
          <button className={s.button}>Исходящие сообщения</button>
        </Link>
        <Link to='/owner/vacancy/incoming'>
          <button className={s.button}>Входящие сообщения</button>
        </Link>
      </div>
    </Wrapper>
  );
};
