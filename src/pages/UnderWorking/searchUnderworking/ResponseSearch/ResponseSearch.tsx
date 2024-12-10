import React from "react";

import s from "../../MyResponseUnderworking/MyResponse.module.scss";
import { Wrapper } from "../../../../widgets/Wrapper/Wrapper";
import { Response } from "../../../../shared/myReponse/Response";
import { Header } from "../../../../widgets/Header/Header";

export const ResponseSearchUnderworking = () => {
  return (
    <Wrapper>
      <Header name='ПОДРАБОТКИ' />
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
