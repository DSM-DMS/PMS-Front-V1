import React, { useState } from "react";
import * as S from "./style";
import Calendar from "react-calendar";

function MonthCalender() {
  const [value, onChange] = useState(new Date());

  const callDay = (Day) => {
    let year = Day.getFullYear();
    let month = Day.getMonth() + 1;
    let date = Day.getDate();

    let TodayDate = year + "" + month + "" + date;
    console.log(TodayDate);
  };

  return (
    <S.MiddleWrapper>
      <S.CalenderMain>
        <Calendar value={value} onChange={onChange} onClickDay={callDay} />
      </S.CalenderMain>
    </S.MiddleWrapper>
  );
}

export default MonthCalender;
