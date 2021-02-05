import React from "react";
import * as S from "./style";

import EventList from "./EventList";

function MonthEvent() {
  return (
    <S.SideWrapper>
      <S.Title>이달의 행사</S.Title>
      <EventList />
    </S.SideWrapper>
  );
}

export default MonthEvent;
