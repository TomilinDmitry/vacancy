import React from "react";
import s from "./style.module.scss";
import { MainPageNavigation } from "../../shared/mainPageNavigation";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
export const MainPage = () => {
  return (
    <Wrapper>
      <section>
        <h1 className={s.title}>
          МЕСТО <br />
          ВСТРЕЧИ - ПВЗ
        </h1>
      </section>
      <MainPageNavigation />
    </Wrapper>
  );
};
