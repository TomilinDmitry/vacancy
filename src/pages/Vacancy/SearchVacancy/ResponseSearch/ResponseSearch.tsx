import React from "react";

import s from "../../MyResponse/MyResponse.module.scss";
import { Response } from "../../../../shared/myReponse/Response";
import { Wrapper } from "../../../../widgets/Wrapper/Wrapper";
import { Header } from "../../../../widgets/Header/Header";

export const ResponseSearch = () => {
  return (
    <Wrapper>
      <Header name='ВАКАНСИИ' />
      <div className={s.container}>
        <ul className={s.responseList}>
          <Response state='respond' button={true} />
          <Response state='approved' button={true} />
          <Response state='respond' button={true} />
          <Response state='viewed' button={true} />
          <Response state='reject' button={true} />
        </ul>
      </div>
    </Wrapper>
  );
};
