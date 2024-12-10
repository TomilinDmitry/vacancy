import React, { ReactNode } from "react";
import s from "./style.module.scss";
export const Wrapper = ({
  children,
  owner,
}: {
  children: ReactNode;
  owner?: boolean;
}) => {
  return (
    <div className={owner ? s.owner : s.wrapper}>{children}</div>
  );
};
