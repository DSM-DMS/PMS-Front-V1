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

  let date = new Date();
  let month = date.getMonth() + 1;

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

  useEffect(() => {
    eventApi();
  }, []);

  return (
    <S.MainWrapper>
      <BackgroundTitle title="" />
      <S.CalenderWrapper>
        <MonthEvent eventList={eventData} />
        <MonthCalender />
        <TodayMeals />
      </S.CalenderWrapper>
      <Footer />
    </S.MainWrapper>
  );
}

export default Calender;
