import React, { useEffect, useState } from "react";
import { FetchEvent } from "../../utils/api/user";
import { requestJW } from "../../utils/axios/axios";
import * as S from "./style";

const EventList = (props) => {
  const [eventData, setEventData] = useState([]);

  let date = new Date();
  let month = date.getMonth() + 1;
  
  useEffect(() => {
    const eventApi = async () => {
      try {
        const { data } = await requestJW(
          "get",
          "calendar",
          {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
          {}
        );
        setEventData(data[`${month}`]);
      } catch (e) {
        console.log(e);
      }
    };

    eventApi();
  }, [month]);

  const eventDate = Object.keys(eventData).reduce(
    (prev, date) => prev.concat({ date, scheudles: eventData[date] }),
    []
  );

  console.log(eventDate);

  const test = eventDate.filter((data) => {
    return data.date === props.today;
  });

  console.log(test);

  return (
    <>
      {eventDate.map((EventList, index) => {
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
      ;
    </>
  );
};

export default EventList;
