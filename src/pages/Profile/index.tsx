import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import s from "./style.module.scss";
import check from "../../app/assets/profile/check-small.svg";
import close from "../../app/assets/profile/close-small.svg";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
import { Header } from "../../widgets/Header/Header";

interface FormData {
  fullName: string;
  phone: string;
  birthDate: string;
  region: string;
  email: string;
}

const FormStyled = styled.form`
  width: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const InputStyled = styled.input`
  padding: 9px 12px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 16px;
  width: 314px;
  box-sizing: border-box;
  position: relative;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ButtonStyled = styled.button`
  padding: 12px;
  border-radius: 12px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  width: 314px;
  &:hover {
    background-color: #0056b3;
  }
`;
const RelativeBlock = styled.div`
  position: relative;
`;
const ErrorMessage = styled.p`
  color: red;
  margin: 0;
  position: absolute;
  right: 10px;
  top: 5px;
  border-radius: 50%;
  border: 1px solid;
  display: flex;
  padding: 3px;
  align-items: center;
  justify-content: center;
  width: 20px;
  font-size: 24px;
  height: 20px;
`;

export const Profile: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Header name='ПРОФИЛЬ' />
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <RelativeBlock>
          <InputStyled
            placeholder='ФИО'
            id='fullName'
            {...register("fullName", {
              required: "!",
            })}
          />
          {errors.fullName && (
            <ErrorMessage>{errors.fullName.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* Телефон */}
        <RelativeBlock>
          {/* <label htmlFor='phone'>Телефон</label> */}
          <InputStyled
            placeholder='Телефон'
            id='phone'
            type='tel'
            {...register("phone", {
              required: "!",
              pattern: {
                value: /^\+?[0-9]{10,15}$/,
                message: "Неверный формат телефона",
              },
            })}
          />
          {errors.phone && (
            <ErrorMessage>{errors.phone.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* Дата рождения */}
        <RelativeBlock>
          {/* <label htmlFor='birthDate'>Дата рождения</label> */}
          <InputStyled
            placeholder='Дата рождения'
            id='birthDate'
            type='date'
            {...register("birthDate")}
          />
          {errors.birthDate && (
            <ErrorMessage>{errors.birthDate.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* Регион */}
        <RelativeBlock>
          {/* <label htmlFor='region'>Регион</label> */}
          <InputStyled
            placeholder='Регион'
            id='region'
            {...register("region", {
              required: "!",
            })}
          />
          {errors.region && (
            <ErrorMessage>{errors.region.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* Email */}
        <RelativeBlock>
          {/* <label htmlFor='email'>Email</label> */}
          <InputStyled
            placeholder='Email'
            id='email'
            type='email'
            {...register("email", {
              required: "!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Неверный формат email",
              },
            })}
          />
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </RelativeBlock>

        <div className={s.containerExp}>
          <div className={s.exp}>
            <span>Есть ли опыт работы на ПВЗ</span>
          </div>
          <button className={s.true} type='button'>
            <img src={check} alt='check' />
          </button>
          <button className={s.false} type='button'>
            <img src={close} alt='close' />
          </button>
        </div>
        <div className={s.pointContainer}>
          <div className={s.point}>В каком Маркетплейсе?</div>
          <div className={s.buttons}>
            <button className={s.button} type='button'>
              ВБ
            </button>
            <button className={s.button} type='button'>
              ОЗОН
            </button>
            <button className={s.button} type='button'>
              ЯМ
            </button>
          </div>
        </div>
        <h3 className={s.rating}>Ваш рейтинг: 4.9</h3>
        <span className={s.agreement}>
          Нажимая кнопку “создать профиль” вы соглашаетесь с политикой
          обработки персональных данных
        </span>
        <ButtonStyled type='submit'>Создать профиль</ButtonStyled>
      </FormStyled>
    </Wrapper>
  );
};
