import React from "react";
import EventList from "./EventList";
import * as S from "./style";

const MonthEvent = () => {
  return (
    <S.SideWrapper>
      <S.Title>이달의 행사</S.Title>
      <S.ListWrapper>
        <EventList />
      </S.ListWrapper>
    </S.SideWrapper>
  );
};

export default MonthEvent;
