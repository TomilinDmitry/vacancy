import React from "react";
import { Wrapper } from "../../../widgets/Wrapper/Wrapper";
import { Header } from "../../../widgets/Header/Header";
import s from "./MyResponse.module.scss";
import { Response } from "../../../shared/myReponse/Response";
export const MyResponseUnderworking = () => {
  return (
    <Wrapper>
      <Header name='МОИ ОТКЛИКИ' />
      <div className={s.container}>
        <ul className={s.responseList}>
          <Response state='pending' />
          <Response state='approved' />
          <Response state='viewed' />
          <Response state='rejected' />
        </ul>
      </div>
    </Wrapper>
  );
};
