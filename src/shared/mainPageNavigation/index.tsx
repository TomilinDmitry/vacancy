import React from "react";
import s from "./style.module.scss";
import {
  navigationButton,
  navigationButtonOwner,
} from "../../app/mocks/mocks";
import { Link, useLocation } from "react-router-dom";

export const MainPageNavigation = () => {
  const location = useLocation();
  const pathname = location.pathname === "/owner";
  console.log(location);
  console.log(pathname);
  return (
    <nav className={s.wrapper}>
      {pathname
        ? navigationButtonOwner.map((button) => (
            <Link
              key={button.id}
              to={button.to}
              className={`${s.button} ${s.activeButton}`}
            >
              {button.name}
            </Link>
          ))
        : navigationButton.map((button) => (
            <Link key={button.id} to={button.to} className={s.button}>
              {button.name}
            </Link>
          ))}
    </nav>
  );
};
