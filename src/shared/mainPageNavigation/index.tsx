import React from "react";
import s from "./style.module.scss";
import { navigationButton } from "../../app/mocks/mocks";
import { Link } from "react-router-dom";

export const MainPageNavigation = () => {
  return (
    <nav className={s.wrapper}>
      {navigationButton.map((button) => (
        <Link key={button.id} to={button.to} className={s.button}>
          {button.name}
        </Link>
      ))}
    </nav>
  );
};
