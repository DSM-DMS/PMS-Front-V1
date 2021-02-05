import React from "react";
import * as S from "./style";

const EventList = () => {
  const EventList = [
    {
      eventName: "기초학력능력평가",
      eventDate: "12/17~12/18",
    },
    {
      eventName: "기말고사",
      eventDate: "12/17~12/18",
    },
    {
      eventName: "의무귀가",
      eventDate: "12/17",
    },
    {
      eventName: "의무귀가",
      eventDate: "12/17",
    },
    {
      eventName: "의무귀가",
      eventDate: "12/17",
    },
  ];

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
