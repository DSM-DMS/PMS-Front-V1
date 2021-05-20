import React from "react";
import * as S from "./style";

import EventList from "./EventList";

const MonthEvent = (props) => {
  console.log(props.eventList);
  
  return (
    <S.SideWrapper>
      <S.Title>이달의 행사</S.Title>
      <S.ListWrapper>
        <EventList eventList={props.EventList} />
      </S.ListWrapper>
    </S.SideWrapper>
  );
};

export default MonthEvent;
