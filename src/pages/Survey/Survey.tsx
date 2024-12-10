import React from "react";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
import { Header } from "../../widgets/Header/Header";

import s from "./survey.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { ButtonStyledOwnerSearch, FormStyledCheck, InputStyled } from "../../app/service/styledComponent/styled";

interface FormData {
  "100": number;
  "200": number;
  "300": number;
  "400": number;
  "500": number;
  "600": number;
  "700": number;
}

export const Survey = ({ owner }: { owner?: boolean }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const updatedData = {
      ...data,
    };

    console.log(updatedData);
  };
  return (
    <Wrapper owner={owner ? owner : false}>
      <Header name='ОПРОСЫ' owner={owner ? owner : false} />
      <div className={s.mainWrapper}>
        <FormStyledCheck onSubmit={handleSubmit(onSubmit)}>
          <div className={s.container}>
            <section>
              <h1 className={s.title}>
                Какую зарплату вы считаете нормальной за выдачу:
              </h1>
            </section>
            <InputStyled
              placeholder='за 100 шт.'
              {...register("100")}
            />
            <InputStyled
              placeholder='за 200 шт.'
              {...register("200")}
            />
            <InputStyled
              placeholder='за 300 шт.'
              {...register("300")}
            />
            <InputStyled
              placeholder='за 400 шт.'
              {...register("400")}
            />
            <InputStyled
              placeholder='за 500 шт.'
              {...register("500")}
            />
            <InputStyled
              placeholder='за 600 шт.'
              {...register("600")}
            />
            <InputStyled
              placeholder='за 700 шт.'
              {...register("700")}
            />
          </div>

          <ButtonStyledOwnerSearch>Принять</ButtonStyledOwnerSearch>
        </FormStyledCheck>
      </div>
    </Wrapper>
  );
};
