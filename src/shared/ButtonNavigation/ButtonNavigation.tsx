import React from "react";
import s from "./buttonNavigation.module.scss";
export const ButtonNavigation = ({
  text,
  owner,
}: {
  text: string;
  owner?: boolean;
}) => {
  return (
    <button className={owner ? s.ownerContainer : s.container}>
      {text}
    </button>
  );
};
