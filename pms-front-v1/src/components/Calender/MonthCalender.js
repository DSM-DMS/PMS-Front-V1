import React, { useState } from "react";
import * as S from "./style";
import Calendar from "react-calendar";

/* const MonthCalender = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);
 */

function MonthCalender(props) {
  const [value, onChange] = useState(new Date());

  const callDay = (Day) => {
    let year = Day.getFullYear();
    const month = String(Day.getMonth() + 1).padStart(2, "0");
    const day = String(Day.getDate()).padStart(2, "0");
    const date = Day.getDay();

    let TodayDate = year + "-" + month + "-" + day;
    let MaelDate = year + "" + month + "" + day;

    props.setChangeDate(TodayDate);
    props.setMealChangeDate(MaelDate);
    props.setMonthChange(month);
    props.setDayChange(day);
    props.setDateChange(date);
  };

  return (
    <>
      <S.MiddleWrapper>
        <S.CalenderMain>
          <Calendar value={value} onChange={onChange} onClickDay={callDay} />
        </S.CalenderMain>
      </S.MiddleWrapper>
    </>
  );
}

export default MonthCalender;
