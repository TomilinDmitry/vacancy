import React, { useState } from "react";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
import { Header } from "../../widgets/Header/Header";
import s from "./checkEmployee.module.scss";
import {
  DaDataFio,
  DaDataSuggestion,
  FioSuggestions,
} from "react-dadata";

import { SubmitHandler, useForm } from "react-hook-form";
import search from "../../app/assets/searchIcon.svg";
import { BlackListModal } from "../../widgets/BlackListModal/BlackListModal";
import { ButtonStyledOwnerSearch, FormStyledCheck, InputStyled, RelativeBlock } from "../../app/service/styledComponent/styled";
interface FormData {
  birthDate?: string;
}
export const CheckEmployee = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const updatedData = {
      ...data,
      address: value?.value,
    };

    console.log(updatedData);
  };

  const [value, setValue] = useState<
    DaDataSuggestion<DaDataFio> | undefined
  >();
  const [open, setOpen] = useState<boolean>(false);
  const [openBlackList, setOpenBlackList] = useState<boolean>(false);
  const token = "2f86521ab43368732f3ed9f6eee907e8e8a88c22";
  return (
    <Wrapper owner>
      <Header name='ПРОВЕРКА СОИСКАТЕЛЯ' owner />
      <FormStyledCheck onSubmit={handleSubmit(onSubmit)}>
        <div className={s.topBlock}>
          <RelativeBlock>
            <FioSuggestions
              token={token}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              delay={1000}
              count={5}
              selectOnBlur={true}
            />
            <span className={s.placeholder}>ФИО</span>
          </RelativeBlock>
          
          <RelativeBlock>
            {/* <label htmlFor='birthDate'>Дата рождения</label> */}
            <InputStyled
              id='birthDate'
              type='date'
              {...register("birthDate")}
            />
            <span className={s.placeholder}>Дата рождения</span>
          </RelativeBlock>
          {open && (
            <div className={s.resultsBlock}>
              <div>
                <section className={s.titleBlock}>
                  <h1 className={s.resultsTitle}>Результаты</h1>
                </section>
                <div className={s.nameBlock}>
                  <span>Иванов Иван Иванович</span>{" "}
                  <span>20.01.2001</span>
                </div>
              </div>
              <div className={s.infoBlock}>
                <p className={s.infoElement}>
                  <span>Откликался на вакансии: </span>
                  <span>10</span>
                </p>
                <p className={s.infoElement}>
                  <span>Согласовано собеседований:</span>
                  <span>5</span>
                </p>
                <p className={s.infoElement}>
                  <span>Пришел на собеседование: </span>
                </p>
              </div>
              <div className={s.infoBlock}>
                <p className={s.infoElement}>
                  <span>Черный список: </span> <span>1</span>
                </p>
                <p className={s.infoElement}>
                  <span>Причина: </span>{" "}
                  <span>Оставляет грязь в пункте выдачи</span>
                </p>
              </div>
              <ButtonStyledOwnerSearch
                onClick={() => setOpenBlackList(true)}
              >
                В ЧЕРНЫЙ СПИСОК
              </ButtonStyledOwnerSearch>
            </div>
          )}
        </div>
        <ButtonStyledOwnerSearch onClick={() => setOpen(true)}>
          <img src={search} alt='searchIcon' />
          ПОИСК
        </ButtonStyledOwnerSearch>
      </FormStyledCheck>
      {openBlackList && (
        <BlackListModal setOpenBlackList={setOpenBlackList} />
      )}
    </Wrapper>
  );
};
