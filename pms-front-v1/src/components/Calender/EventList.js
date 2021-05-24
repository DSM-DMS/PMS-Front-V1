import React, { useEffect, useState } from "react";
import { requestJW } from "../../utils/axios/axios";
import * as S from "./style";

const EventList = () => {
  const [eventData, setEventData] = useState([]);

  let date = new Date();
  let month = date.getMonth() + 1;

  // 이달의 행사
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
      console.log(data[`${month}`]);
      setEventData(data[`${month}`]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    eventApi();
  }, []);

  // console.log(eventData["2021-05-03"][0]);

  return (
    <>
      {Object.keys(eventData).map((EventList, index) => {
        console.log(EventList);
        const EventColor =
          EventList.eventName === "의무귀가" ? "#D37C7C" : "#56AD77";
        return (
          <S.Event key={index}>
            <S.EventName>
              <div
                className="circle"
                style={{ backgroundColor: EventColor }}
              ></div>
              <span>{EventList}</span>
            </S.EventName>
            <S.EventDate>
              <span>{EventList}</span>
            </S.EventDate>
          </S.Event>
        );
      })}
    </>
  );
};

export default EventList;
