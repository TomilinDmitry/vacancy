import React, { useState } from "react";
import { Wrapper } from "../../widgets/Wrapper/Wrapper";
import { Header } from "../../widgets/Header/Header";
import s from "./ratingPvz.module.scss";
import { VacancyResponseCard } from "../../shared/VacancyResponseCard/VacacncyResponseCard";
import { SetRatingModal } from "../../widgets/SetRatingModal/SetRatingModal";
export const RatingPvz = ({ owner }: { owner?: boolean }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Wrapper owner={owner ? owner : false}>
      <Header
        name={owner ? "Оценить cотрудника" : "Оценить ПВЗ"}
        owner={owner ? owner : false}
      />
      <div className={s.container}>
        <p className={s.description}>
          <span>
            Оценить сотрудника, который откликнулся на постоянную
            работу, можно через{" "}
            <span className={s.whiteText}>три дня</span>
            после начала стажировки.
          </span>
          <span>
            Оценить сотрудника, который откликнулся на подработку,
            можно{" "}
            <span className={s.whiteText}>на следующий день</span>{" "}
            после окончания смены.
          </span>
        </p>
        <div className={s.cardContainer}>
          <VacancyResponseCard
            buttons
            owner={owner ? owner : false}
            setOpen={setOpen}
          />
          <VacancyResponseCard
            buttons
            owner={owner ? owner : false}
            setOpen={setOpen}
          />
          <VacancyResponseCard
            buttons
            owner={owner ? owner : false}
            setOpen={setOpen}
          />
          <VacancyResponseCard
            buttons
            owner={owner ? owner : false}
            setOpen={setOpen}
          />
        </div>
      </div>
      {open && (
        <SetRatingModal
          owner={owner ? owner : false}
          setOpen={setOpen}
        />
      )}
    </Wrapper>
  );
};
