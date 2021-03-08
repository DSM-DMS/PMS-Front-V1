import React, { useState } from "react";
import * as S from "./style";
import Calendar from "react-calendar";

function MonthCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <S.MiddleWrapper>
      <S.CalenderMain>
        <Calendar onChange={onChange} value={value}  />
      </S.CalenderMain>
    </S.MiddleWrapper>
  );
}

export default MonthCalender;
