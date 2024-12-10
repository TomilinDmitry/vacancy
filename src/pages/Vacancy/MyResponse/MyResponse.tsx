import React from "react";
import { Wrapper } from "../../../widgets/Wrapper/Wrapper";
import { Header } from "../../../widgets/Header/Header";
import s from "./MyResponse.module.scss";
import { Response } from "../../../shared/myReponse/Response";
export const MyResponse = () => {
  return (
    <Wrapper>
      <Header name='МОИ ОТКЛИКИ' />
      <div className={s.container}>
        <ul className={s.responseList}>
          <Response state='pending' button={true} />
          <Response state='approved' button={true} />
          <Response state='viewed' button={true} />
          <Response state='rejected' button={true} />
        </ul>
      </div>
    </Wrapper>
  );
};
