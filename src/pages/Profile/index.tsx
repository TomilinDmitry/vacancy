import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import s from "./style.module.scss";
import check from "../../app/assets/profile/check-small.svg";
import close from "../../app/assets/profile/close-small.svg";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
import { Header } from "../../widgets/Header/Header";
import {
  AddressSuggestions,
  DaDataAddress,
  DaDataEmail,
  DaDataFio,
  DaDataSuggestion,
  EmailSuggestions,
  FioSuggestions,
} from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import "./dadata.css";
// import { useLocation } from "react-router-dom";
import {
  ButtonStyled,
  ButtonStyledOwner,
  ErrorMessage,
  FormStyled,
  InputStyled,
  RelativeBlock,
} from "../../app/service/styledComponent/styled";
import {
  useDispatch,
  useSelector,
} from "../../app/service/hooks/hooks";
import { TTelegramData } from "../../app/types/type";
import { setUserTelegram } from "../../app/service/slices/TelegramData";
import {
  setActiveTab,
  setExperience,
  setMerketplaces,
} from "../../app/service/slices/registrationSlice";
import {
  registerUser,
  updateUserProfile,
} from "../../app/service/api/mainApi";
import { useLocation } from "react-router-dom";
interface FormData {
  fullName?: string;
  phone?: string;
  birth_date?: string;
  user_type?: "APPLICANT" | "OWNER";
  region: string;
  email: string;
  Inn?: number;
  experience: boolean;
  marketplaces: string[];
}

export const Profile = () => {
  const {
    activeTab,
    experience,
    marketplaces,
    userData,
    applicantData,
  } = useSelector((state) => state.register);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullName: userData?.full_name || "",
      phone: userData?.phone || "",
      birth_date: applicantData?.birth_date || "",
      region: applicantData?.region || "12",
      email: userData?.email || "",
      experience: applicantData?.experience || false,
      marketplaces: applicantData?.marketplaces || [],
    },
  });

  // const { userTelegram } = useSelector((state) => state.telegram);
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (window.Telegram?.WebApp) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const tg = window.Telegram.WebApp;

      // Инициализация WebApp
      tg.ready();

      // Получение данных пользователя
      const user: TTelegramData = tg.initDataUnsafe?.user;
      if (user) {
        dispatch(setUserTelegram(user));
      }

      return () => {
        // Очистка ресурсов при размонтировании
        tg.close();
      };
    }
  }, [dispatch]);
  // console.log(applicantData.birth_date);
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const updatedData = {
      full_name: valueFio?.value.toString(),
      phone: data.phone,
      email: valueEmail?.value.toString(),
      user_type: activeTab,
      password: "123",
      region: valueAddress?.value.toString()
        ? valueAddress?.value.toString()
        : applicantData.region,
      ...(activeTab === "APPLICANT" && {
        birth_date: data.birth_date, // Пример даты
        experience: experience,
        ...(marketplaces.length > 0 && {
          marketplaces,
        }),
      }),
      ...(activeTab === "OWNER" && {
        birth_date: data.birth_date, // Пример даты
        ...(data.Inn && { inn: data.Inn }),
      }),
    };
    // console.log(updatedData);
    if (location.pathname === "/profile" ) {
      const updatedProfile = await updateUserProfile(
        updatedData,
        dispatch,
      );
      if (updatedProfile) {
        console.log("Профиль успешно обновлен:", updatedProfile);
      } else {
        console.error("Ошибка обновления профиля");
      }
    } else {
      const registeredUser = await registerUser(
        updatedData,
        dispatch,
      );
      if (registeredUser) {
        console.log(
          "Пользователь успешно зарегистрирован:",
          registeredUser,
        );
      } else {
        console.error("Ошибка регистрации");
      }
    }
    // await registerUser(updatedData, dispatch);
  };
  const [valueFio, setValueFio] = useState<
    DaDataSuggestion<DaDataFio> | undefined
  >();
  const [valueAddress, setValueAddress] = useState<
    DaDataSuggestion<DaDataAddress> | undefined
  >();
  const [valueEmail, setValueEmail] = useState<
    DaDataSuggestion<DaDataEmail> | undefined
  >();
  const token = "2f86521ab43368732f3ed9f6eee907e8e8a88c22";

  // const location = useLocation();

  const togleActiveTab = (tab: "APPLICANT" | "OWNER") => {
    dispatch(setActiveTab(tab));
  };
  const togleExperience = (state: boolean) => {
    dispatch(setExperience(state));
  };
  const toggleMarketplace = (value: string) => {
    dispatch(setMerketplaces(value));
  };

  const location = useLocation();
  useEffect(() => {
    console.log("Путь изменился:", location.pathname);
    // Выполняйте любые действия при изменении пути
  }, [location.pathname]);

  console.log(userData);

  return activeTab === "OWNER" ? (
    <Wrapper owner>
      <Header
        owner
        name={`${
          location.pathname === "/profile" ? "ПРОФИЛЬ" : "РЕГИСТРАЦИЯ"
        } `}
      />
      <div className={s.selectType}>
        <button
          className={`${s.button}`}
          onClick={() => togleActiveTab("APPLICANT")}
        >
          Работник
        </button>
        <button
          className={`${
            activeTab === "OWNER" ? s.buttonActiveOwner : s.button
          }`}
          onClick={() => togleActiveTab("OWNER")}
        >
          Владелец
        </button>
      </div>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <RelativeBlock>
          <FioSuggestions
            token={token}
            value={valueFio}
            onChange={(newValue) => setValueFio(newValue)}
            delay={1000}
            count={5}
            defaultQuery={
              userData?.full_name ? `${userData.full_name}` : ""
            }
            selectOnBlur={true}
          />
          <span className={s.placeholder}>ФИО</span>

          {errors.fullName && (
            <ErrorMessage>{errors.fullName.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* Телефон */}
        <RelativeBlock>
          {/* <label htmlFor='phone'>Телефон</label> */}
          <InputStyled
            id='phone'
            type='tel'
            value={userData?.phone}
            {...register("phone", {
              required: "!",
              pattern: {
                value: /^\+?[0-9]{10,15}$/,
                // message: "Неверный формат телефона",
              },
            })}
          />
          <span className={s.placeholder}>Телефон</span>

          {errors.phone && (
            <ErrorMessage>{errors.phone.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* INN */}
        <RelativeBlock>
          {/* <label htmlFor='birthDate'>Дата рождения</label> */}
          <InputStyled
            id='inn'
            type='number'
            minLength={10}
            maxLength={12}
            {...register("Inn")}
          />
          <span className={s.placeholder}>ИНН</span>

          {errors.Inn && (
            <ErrorMessage>{errors?.Inn.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* Регион */}
        <RelativeBlock>
          <AddressSuggestions
            token={token}
            value={valueAddress}
            onChange={(newValue) => setValueAddress(newValue)}
            filterToBound='street'
            delay={1000}
            count={5}
            defaultQuery={
              applicantData.region ? applicantData.region : ""
            }
            selectOnBlur={true}
          />
          <span className={s.placeholder}>Адрес</span>
          {errors.region && (
            <ErrorMessage>{errors.region.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* Email */}
        <RelativeBlock>
          {/* <label htmlFor='email'>Email</label> */}
          <EmailSuggestions
            token={token}
            value={valueEmail}
            onChange={(newValue) => setValueEmail(newValue)}
            count={5}
            delay={1000}
            defaultQuery={userData?.email ? `${userData.email}` : ""}
            selectOnBlur={true}
          />
          <span className={s.placeholder}>Email</span>
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </RelativeBlock>

        <h3 className={s.rating}>Ваш рейтинг: 4.9</h3>
        <span className={s.agreementOwner}>
          Заполните все данные и пройдите проверку. Указанные данные
          нигде не будут указываться и никто их не увидит, но вы
          получите{" "}
          <span className={s.status}>
            статус проверенного собственника ПВЗ
          </span>
          , благодаря этому получите больше откликов на свои вакансии,
          а также возможность проверки соискателей на благонадежность
          по различным источникам.
        </span>
        <ButtonStyledOwner type='submit'>
          {location.pathname === "/profile"
            ? "Обновить профиль"
            : "Отправить данные на проверку"}
        </ButtonStyledOwner>
      </FormStyled>
    </Wrapper>
  ) : (
    <Wrapper>
      <Header
        name={`${
          location.pathname === "/profile" ? "ПРОФИЛЬ" : "РЕГИСТРАЦИЯ"
        } `}
      />
      <div className={s.selectType}>
        <button
          className={`${
            activeTab === "APPLICANT" ? s.buttonActive : s.button
          }`}
          onClick={() => togleActiveTab("APPLICANT")}
        >
          Работник
        </button>
        <button
          className={`${s.button}`}
          onClick={() => togleActiveTab("OWNER")}
        >
          Владелец
        </button>
      </div>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <RelativeBlock>
          <FioSuggestions
            token={token}
            value={valueFio}
            onChange={(newValue) => setValueFio(newValue)}
            delay={1000}
            count={5}
            defaultQuery={
              userData?.full_name ? `${userData.full_name}` : ""
            }
            selectOnBlur={true}
          />
          <span className={s.placeholder}>ФИО</span>

          {errors.fullName && (
            <ErrorMessage>{errors.fullName.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* Телефон */}
        <RelativeBlock>
          {/* <label htmlFor='phone'>Телефон</label> */}
          <InputStyled
            id='phone'
            type='tel'
            value={userData?.phone}
            {...register("phone", {
              required: "!",
              pattern: {
                value: /^\+?[0-9]{10,15}$/,
                message: "Неверный формат телефона",
              },
            })}
          />
          <span className={s.placeholder}>Телефон</span>

          {errors.phone && (
            <ErrorMessage>{errors.phone.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* Дата рождения */}
        <RelativeBlock>
          {/* <label htmlFor='birthDate'>Дата рождения</label> */}
          <InputStyled
            id='birthDate'
            type='date'
            // value={
            //   applicantData.birth_date
            //     ? applicantData.birth_date
            //     : "01.01.2001"
            // }
            {...register("birth_date")}
          />
          <span className={s.placeholder}>Дата рождения</span>

          {errors.birth_date && (
            <ErrorMessage>{errors.birth_date.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* Регион */}
        <RelativeBlock>
          <AddressSuggestions
            token={token}
            value={valueAddress}
            onChange={(newValue) => setValueAddress(newValue)}
            filterToBound='street'
            delay={1000}
            count={5}
            selectOnBlur={true}
            defaultQuery={
              applicantData?.region ? applicantData.region : ""
            }
          />
          <span className={s.placeholder}>Адрес</span>
          {errors.region && (
            <ErrorMessage>{errors.region.message}</ErrorMessage>
          )}
        </RelativeBlock>

        {/* Email */}
        <RelativeBlock>
          {/* <label htmlFor='email'>Email</label> */}
          <EmailSuggestions
            token={token}
            value={valueEmail}
            onChange={(newValue) => setValueEmail(newValue)}
            count={5}
            delay={1000}
            defaultQuery={userData?.email ? `${userData.email}` : ""}
            selectOnBlur={true}
          />
          <span className={s.placeholder}>Email</span>
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </RelativeBlock>

        <div className={s.containerExp}>
          <div className={s.exp}>
            <span>Есть ли опыт работы на ПВЗ</span>
          </div>
          <button
            onClick={() => togleExperience(true)}
            className={experience === true ? s.activeExpTrue : s.true}
            type='button'
          >
            <img src={check} alt='check' />
          </button>
          <button
            onClick={() => togleExperience(false)}
            className={
              experience === false ? s.activeExpFalse : s.false
            }
            type='button'
          >
            <img src={close} alt='close' />
          </button>
        </div>
        <div className={s.pointContainer}>
          <div className={s.point}>В каком Маркетплейсе?</div>
          <div className={s.buttons}>
            <button
              className={
                marketplaces.includes("WB")
                  ? s.activeButton
                  : s.button
              }
              type='button'
              onClick={() => toggleMarketplace("WB")}
            >
              WB
            </button>
            <button
              className={
                marketplaces.includes("OZON")
                  ? s.activeButton
                  : s.button
              }
              type='button'
              onClick={() => toggleMarketplace("OZON")}
            >
              OZON
            </button>
            <button
              className={
                marketplaces.includes("YM")
                  ? s.activeButton
                  : s.button
              }
              type='button'
              onClick={() => toggleMarketplace("YM")}
            >
              YM
            </button>
          </div>
        </div>
        <h3 className={s.rating}>Ваш рейтинг: 4.9</h3>
        <span className={s.agreement}>
          Нажимая кнопку “создать профиль” вы соглашаетесь с политикой
          обработки персональных данных
        </span>
        <ButtonStyled type='submit'>
          {location.pathname === "/profile"
            ? "Обновить профиль"
            : "Создать профиль"}
        </ButtonStyled>
      </FormStyled>
    </Wrapper>
  );
};
