import React from "react";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
import s from "./underWorking.module.scss";
import { Header } from "../../widgets/Header/Header";
import { ButtonNavigation } from "../../shared/ButtonNavigation/ButtonNavigation";
import { Link } from "react-router-dom";
export const UnderWorking = () => {
  return (
    <Wrapper>
      {/* <div className={s.container}> */}
      <Header name='ПОДРАБОТКИ' />
      <p className={s.text}>
        Чтобы найти опытного сотрудника на подработку или подмену, мы
        рукомендуем собственников ПВЗ ставить в оплату труда в 1.5
        ставки за смену или вы можете предложить свою стоимость смены
      </p>
      <ul className={s.buttonList}>
        <Link to='/underWorking/search-underworking'>
          <li className={s.listElement}>
            <ButtonNavigation text='Найти подработку' />
          </li>
        </Link>
        <Link to='/underWorking/my-response'>
          <li className={s.listElement}>
            <ButtonNavigation text='Мои отклики' />
          </li>
        </Link>
        <Link to='/underWorking/calendar'>
          <li className={s.listElement}>
            <ButtonNavigation text='Календарь подработок' />
          </li>
        </Link>
      </ul>
      {/* </div> */}
    </Wrapper>
  );
};
