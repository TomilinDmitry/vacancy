import React from "react";
import s from "./blackList.module.scss";
import { ButtonStyledOwnerSearch } from "../../app/service/styledComponent/styled";
import close from "../../app/assets/profile/close-small.svg";
export const BlackListModal = ({
  setOpenBlackList,
}: {
  setOpenBlackList: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={s.wrapperBlackList}>
      <div className={s.containerBlackList}>
        <section className={s.titleContainer}>
          <h1 className={s.blackListTitle}>
            Причина занесения в черный список
          </h1>
          <img
            src={close}
            alt=''
            onClick={() => setOpenBlackList(false)}
          />
        </section>
        <textarea
          className={s.blackListInput}
          placeholder='Введите причину'
        />
      </div>
      <ButtonStyledOwnerSearch
        onClick={() => setOpenBlackList(false)}
      >
        Отправить на рассмотрение
      </ButtonStyledOwnerSearch>
    </div>
  );
};
