import React from "react";
import { Wrapper } from "../../../../widgets/Wrapper/Wrapper";
import { Header } from "../../../../widgets/Header/Header";
import s from "./underwork.module.scss";
import { ButtonStyledOwner } from "../../../../app/service/styledComponent/styled";
export const UnderWork = () => {
  return (
    <Wrapper owner>
      <Header name='НА ПОДРАБОТКУ' owner />
      <div className={s.container}>
        <main>
          <p className={s.text}>
            <span>
              На подработку откликаются кандидаты, подтвердившие свой
              опыт работы на ПВЗ
            </span>
            <br />
            <br />
            <span>
              Чтобы найти опытного сотрудника на подработку или
              подмену, мы рекомендуем собственникам ПВЗ ставить в
              оплату труда 1.5 ставки за смену. Редактировать вакансию
              можно до{" "}
              <span className={s.textWhite}>первого отклика.</span>
            </span>
          </p>
          <div className={s.mainContainer}>
            <div className={s.inputContainer}>
              <label htmlFor='' className={s.label}>
                Оплата за смену
              </label>
              <input
                type='number'
                className={s.input}
                placeholder='Оплата за смену'
              />
            </div>
            <div className={s.inputContainer}>
              <label htmlFor='' className={s.label}>
                Оплата за смену
              </label>
              <input
                type='datetime-local'
                className={s.input}
                placeholder='Оплата за смену'
              />
            </div>
            <div className={s.selectContainer}>
              <label htmlFor='' className={s.label}>
                Выбор ПВЗ
              </label>
              <select name='' id='' className={s.select}>
                <option value='pvz1'>ул.Пушкина д.19</option>
                <option value='pvz2'>ул.Пушкина д.22</option>
                <option value='pvz3'>ул.Пушкина д.1</option>
              </select>
            </div>
          </div>
        </main>
        <ButtonStyledOwner>Создать вакансию</ButtonStyledOwner>
      </div>
    </Wrapper>
  );
};
