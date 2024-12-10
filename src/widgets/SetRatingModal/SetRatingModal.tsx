import React, { useState } from "react";
import s from "./setRatingModal.module.scss";
import { ButtonStyledOwnerSearch } from "../../app/service/styledComponent/styled";
import close from "../../app/assets/profile/close-small.svg";
import { Rating, Typography } from "@mui/material";
export const SetRatingModal = ({
  owner,
  setOpen,
}: {
  owner: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState<number | null>(5);
  const [value2, setValue2] = useState<number | null>(5);
  const [value3, setValue3] = useState<number | null>(5);
  const [value4, setValue4] = useState<number | null>(5);
  const [value5, setValue5] = useState<number | null>(5);

  return (
    <div className={s.wrapperBlackList}>
      <div className={s.containerBlackList}>
        <section className={s.titleContainer}>
          <h1 className={s.blackListTitle}>
            {owner ? "Оцените сотрудника" : "Оцените ПВЗ"}
          </h1>
          <img src={close} alt='' onClick={() => setOpen(false)} />
        </section>

        <div className={s.mainBlock}>
          <div className={s.ratingContainer}>
            <Typography component='legend' align='left'>
              {owner ? "Пунктуальность" : "Порядок на ПВЗ"}
            </Typography>
            <Rating
              name='customized-10'
              defaultValue={5}
              max={10}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className={s.ratingContainer}>
            <Typography component='legend' align='left'>
              {owner
                ? "Клиентоориентированность"
                : "Наличие расходников на ПВЗ"}
            </Typography>
            <Rating
              name='customized-10'
              defaultValue={5}
              max={10}
              onChange={(event, newValue) => {
                setValue2(newValue);
              }}
            />
          </div>
          <div className={s.ratingContainer}>
            <Typography component='legend' align='left'>
              {owner
                ? "Профессионализм"
                : "Соответствие вакансии действительности"}
            </Typography>
            <Rating
              name='customized-10'
              defaultValue={5}
              max={10}
              onChange={(event, newValue) => {
                setValue3(newValue);
              }}
            />
          </div>
          <div className={s.ratingContainer}>
            <Typography component='legend' align='left'>
              {owner
                ? "Знание ПК и оргтехники"
                : "Своевременная оплата"}
            </Typography>
            <Rating
              name='customized-10'
              defaultValue={5}
              max={10}
              onChange={(event, newValue) => {
                setValue4(newValue);
              }}
            />
          </div>
          <div className={s.ratingContainer}>
            <Typography component='legend' align='left'>
              {owner
                ? "Порядок на рабочем месте"
                : "Компетентность собственника"}
            </Typography>
            <Rating
              name='customized-10'
              defaultValue={5}
              max={10}
              onChange={(event, newValue) => {
                setValue5(newValue);
              }}
            />
          </div>
        </div>
      </div>
      <ButtonStyledOwnerSearch onClick={() => setOpen(false)}>
        Сохранить
      </ButtonStyledOwnerSearch>
    </div>
  );
};
