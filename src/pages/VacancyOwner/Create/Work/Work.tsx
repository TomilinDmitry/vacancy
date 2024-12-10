import React from "react";
import { Wrapper } from "../../../../widgets/Wrapper/Wrapper";
import { Header } from "../../../../widgets/Header/Header";
import s from "./work.module.scss";
import { ButtonStyledOwner } from "../../../../app/service/styledComponent/styled";
export const Work = () => {
  return (
    <Wrapper owner>
      <Header name='НА ПОСТОЯННУЮ РАБОТУ' owner />
      <div className={s.container}>
        <main>
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
        </main>
        <ButtonStyledOwner>Создать вакансию</ButtonStyledOwner>
      </div>
    </Wrapper>
  );
};
