import React, { ReactNode } from "react";
import s from "./style.module.scss";
export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className={s.wrapper}>{children}</div>;
};
