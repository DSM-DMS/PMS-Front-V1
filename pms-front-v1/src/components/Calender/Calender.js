import React, { useEffect, useState } from "react";
import * as S from "./style";

import BackgroundTitle from "../BackgroundTitle";
import Footer from "../footer/Footer";
import MonthEvent from "./MonthEvent";
import MonthCalender from "./MonthCalender";
import TodayMeals from "./TodayMeals";
import { requestJW } from "../../utils/axios/axios";

function Calender() {
  const [eventData, setEventData] = useState([]);
  const [eventDayData, seteEventDayData] = useState([]);

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  let TodayDate = year + "-" + month + "-" + day;
  console.log(TodayDate);

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
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    eventApi();
  }, [month, TodayDate]);

  const eventDate = Object.keys(eventData).reduce(
    (prev, date) => prev.concat({ date, scheudles: eventData[date] }),
    []
  );

  console.log(eventDate);

  return (
    <S.MainWrapper>
      <BackgroundTitle title="" />
      <S.CalenderWrapper>
        <MonthEvent eventDate={eventDate} />
        <MonthCalender />
        <TodayMeals eventDayData={eventDayData} />
      </S.CalenderWrapper>
      <Footer />
    </S.MainWrapper>
  );
}

export default Calender;
