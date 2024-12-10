import React from "react";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
import { Header } from "../../widgets/Header/Header";
import s from "./myPvz.module.scss";
import { ButtonNavigation } from "../../shared/ButtonNavigation/ButtonNavigation";
import { Link } from "react-router-dom";
import { PvzCard } from "../../shared/PvzCard/pvzCard";
export const MyPvz = () => {
  return (
    <Wrapper owner>
      <Header name='МОИ ПВЗ' owner />
      <div className={s.container}>
        <Link to='/owner/my-pvz/add'>
          <ButtonNavigation text='ДОБАВИТЬ ПВЗ' owner />
        </Link>
        <PvzCard />
        <PvzCard />
        <PvzCard />
      </div>
    </Wrapper>
  );
};
