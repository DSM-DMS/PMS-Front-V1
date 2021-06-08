import React, { useEffect, useState } from "react";
import * as S from "./style";
import BackgroundTitle from "../BackgroundTitle";
import Footer from "../footer/Footer";
import MonthEvent from "./MonthEvent";
import MonthCalender from "./MonthCalender";
import TodayMeals from "./TodayMeals";
import { requestJW } from "../../utils/axios/axios";

const Calender = () => {
  const [eventData, setEventData] = useState([]);

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const weekday = date.getDay();

  let Month = date.getMonth() + 1;

  let TodayDate = year + "" + month + "" + day;
  let today = year + "-" + month + "-" + day;

  const [evnetChangeDate, setEventChangeDate] = useState(today);
  const [mealChangeDate, setMealChangeDate] = useState(TodayDate);
  const [monthChange, setMonthChange] = useState(month);
  const [dayChange, setDayChange] = useState(day);
  const [dateChange, setDateChange] = useState(weekday);

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
        setEventData(data[`${Month}`]);
      } catch (e) {
        console.log(e);
      }
    };

    eventApi();
  }, [Month]);

  const eventDate = Object.keys(eventData).reduce(
    (prev, date) => prev.concat({ date, scheudles: eventData[date] }),
    []
  );

  const todayEvent = eventDate.filter((data) => {
    return data.date === evnetChangeDate;
  });

  return (
    <>
      <S.MainWrapper>
        <BackgroundTitle title="" />
        <S.CalenderWrapper>
          <MonthEvent eventDate={eventDate} />
          <MonthCalender
            setChangeDate={setEventChangeDate}
            setMealChangeDate={setMealChangeDate}
            setMonthChange={setMonthChange}
            setDayChange={setDayChange}
            setDateChange={setDateChange}
          />
          <TodayMeals
            month={monthChange}
            day={dayChange}
            date={dateChange}
            today={today}
            eventDate={todayEvent}
            TodayDate={mealChangeDate}
          />
        </S.CalenderWrapper>
        <Footer />
      </S.MainWrapper>
    </>
  );
};

export default Calender;
