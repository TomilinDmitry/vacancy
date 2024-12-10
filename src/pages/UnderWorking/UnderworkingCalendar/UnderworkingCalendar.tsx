import React, { ChangeEventHandler, useState } from "react";

import { setHours, setMinutes } from "date-fns";
import { DayPicker } from "react-day-picker";
import { Wrapper } from "../../../widgets/Wrapper/Wrapper";
import "react-day-picker/style.css";
import s from "./underworkingCalendar.module.scss";
import { Header } from "../../../widgets/Header/Header";
import { Response } from "../../../shared/myReponse/Response";
import "../../../app/service/global.css";
export const UnderworkingCalendar = () => {
  const [selected, setSelected] = useState<Date>();
  const [timeValue, setTimeValue] = useState<string>("00:00");

  //   const handleTimeChange: ChangeEventHandler<HTMLInputElement> = (
  //     e,
  //   ) => {
  //     const time = e.target.value;
  //     if (!selected) {
  //       setTimeValue(time);
  //       return;
  //     }
  //     const [hours, minutes] = time
  //       .split(":")
  //       .map((str) => parseInt(str, 10));
  //     const newSelectedDate = setHours(
  //       setMinutes(selected, minutes),
  //       hours,
  //     );
  //     setSelected(newSelectedDate);
  //     setTimeValue(time);
  //   };

  const handleDaySelect = (date: Date | undefined) => {
    if (!timeValue || !date) {
      setSelected(date);
      return;
    }
    const [hours, minutes] = timeValue
      .split(":")
      .map((str) => parseInt(str, 10));
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes,
    );
    setSelected(newDate);
  };
  return (
    <Wrapper>
      <Header name='КАЛЕНДАРЬ' />
      <div className={s.calendarContainer}>
        {/* <form>
          <label>
            Выберите время:
            <input
              type='time'
              value={timeValue}
              onChange={handleTimeChange}
            />
          </label>
        </form> */}
        {/* <div className='rdp-root'> */}
        <DayPicker
          mode='single'
          selected={selected}
          style={{
            //   transform: "scale(0.7)", // Уменьшаем календарь до 80%
            transformOrigin: "top",
          }}
          onSelect={handleDaySelect}
        />
        {/* </div> */}
        <div className={s.cardContainer}>
          <Response button={false} />
          <Response button={false} />
          <Response button={false} />
          <Response button={false} />
        </div>
      </div>
    </Wrapper>
  );
};
