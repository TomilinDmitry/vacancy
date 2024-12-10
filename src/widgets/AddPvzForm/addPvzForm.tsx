import React, { useState } from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import { Header } from "../Header/Header";
import s from "./addPvzForm.module.scss";

import {
  AddressSuggestions,
  DaDataAddress,
  DaDataSuggestion,
} from "react-dadata";
import { SubmitHandler, useForm } from "react-hook-form";
import { ButtonStyledOwner, ErrorMessage, FormStyled, InputStyled, RelativeBlock } from "../../app/service/styledComponent/styled";

interface FormData {
  name: string;
  adress: string;
  marketplace: string;
  idPvz: string;
  productsDay: number;
  start: string;
  end: string;
}
export const AddPvzForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const updatedData = {
      ...data,
      address: valueAddress?.value,
    };

    console.log(updatedData);
  };

  const [valueAddress, setValueAddress] = useState<
    DaDataSuggestion<DaDataAddress> | undefined
  >();

  const token = "2f86521ab43368732f3ed9f6eee907e8e8a88c22";

  return (
    <Wrapper owner>
      <Header owner name='ДОБАВИТЬ ПВЗ' />
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <RelativeBlock>
          <InputStyled
            {...register("name", {
              required: "!",
            })}
          />
          <span className={s.placeholder}>Название</span>

          {errors.name && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
          )}
        </RelativeBlock>

        <RelativeBlock>
          <AddressSuggestions
            token={token}
            value={valueAddress}
            onChange={(newValue) => setValueAddress(newValue)}
            filterToBound='street'
            delay={1000}
            count={5}
            selectOnBlur={true}
          />
          <span className={s.placeholder}>Адрес</span>
          {errors.adress && (
            <ErrorMessage>{errors.adress.message}</ErrorMessage>
          )}
        </RelativeBlock>
        {/* INN */}
        <RelativeBlock>
          {/* <label htmlFor='birthDate'>Дата рождения</label> */}
          <select
            {...register("marketplace")}
            name='MP'
            id='MP'
            className={s.select}
          >
            <option value='select' disabled className={s.option}>
              Выберите МП
            </option>
            <option value='ozon' className={s.option}>
              OZON
            </option>
            <option value='wb' className={s.option}>
              Wildberries
            </option>
            <option value='yandex' className={s.option}>
              Yandex
            </option>
          </select>
        </RelativeBlock>
        <RelativeBlock>
          {/* <label htmlFor='birthDate'>Дата рождения</label> */}
          <select
            {...register("idPvz")}
            name='idPvz'
            id='idPvz'
            className={s.select}
          >
            <option value='select' disabled className={s.option}>
              Выберите id
            </option>
            <option value='point' className={s.option}>
              point
            </option>
            <option value='NPOS' className={s.option}>
              NPOS
            </option>
            <option value='NPOS+' className={s.option}>
              NPOS+
            </option>
          </select>
        </RelativeBlock>
        <div className={s.productsDayContainer}>
          <span className={s.text}>Выдача товара в день (шт)</span>
          <input
            className={s.productsDayInput}
            type='number'
            {...register("productsDay", {
              required: "!",
            })}
          />

          {errors.name && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
          )}
        </div>
        <div className={s.timeContainer}>
          <span className={s.text}>Время работы</span>
          <div className={s.workTime}>
            <span className={s.text}>Начало работы:</span>
            <input
              className={s.productsDayInput}
              type='time'
              {...register("start", {
                required: "!",
              })}
            />
          </div>
          <div className={s.workTime}>
            <span className={s.text}>Конец работы:</span>
            <input
              className={s.productsDayInput}
              type='time'
              {...register("end", {
                required: "!",
              })}
            />
          </div>

          {errors.name && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
          )}
        </div>

        <ButtonStyledOwner type='submit'>
          Отправить данные на проверку
        </ButtonStyledOwner>
      </FormStyled>
    </Wrapper>
  );
};
