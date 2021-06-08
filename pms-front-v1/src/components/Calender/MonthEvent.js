import React from "react";

import * as S from "./style";

const MonthEvent = (props) => {
  return (
    <S.SideWrapper>
      <S.Title>이달의 행사</S.Title>
      <S.ListWrapper>
        {props.eventDate.map((EventList, index) => {
          const EventDate = EventList.date.split("-");
          const date = EventDate[1] + "-" + EventDate[2];
          const EventColor =
            EventList.scheudles[0] === "의무귀가" ? "#D37C7C" : "#56AD77";
          return (
            <S.Event key={index}>
              <S.EventName>
                <div
                  className="circle"
                  style={{ backgroundColor: EventColor }}
                ></div>
                <span>{EventList.scheudles[0]}</span>
              </S.EventName>
              <S.EventDate>
                <span>{date}</span>
              </S.EventDate>
            </S.Event>
          );
        })}
      </S.ListWrapper>
    </S.SideWrapper>
  );
};

export default MonthEvent;
