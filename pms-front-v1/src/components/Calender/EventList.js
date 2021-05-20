import React from "react";
import * as S from "./style";

const EventList = (props) => {
  const EventList = props.eventList;

  return (
    <>
      {EventList.map((EventList) => {
        const EventColor =
          EventList.eventName === "의무귀가" ? "#D37C7C" : "#56AD77";
        return (
          <S.Event>
            <S.EventName>
              <div
                className="circle"
                style={{ backgroundColor: EventColor }}
              ></div>
              <span>{EventList.eventName}</span>
            </S.EventName>
            <S.EventDate>
              <span>{EventList.eventDate}</span>
            </S.EventDate>
          </S.Event>
        );
      })}
    </>
  );
};

export default EventList;
