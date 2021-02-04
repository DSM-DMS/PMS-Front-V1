import React from "react";
import * as S from "./style";

import BackgroundTitle from "../BackgroundTitle";
import Footer from "../footer/Footer";
import MonthEvent from "./MonthEvent";
import MonthCalender from "./MonthCalender";
import TodayMeals from "./TodayMeals";

function Calender() {
  return (
    <S.MainWrapper>
      <BackgroundTitle />
      <S.CalenderWrapper>
        <MonthEvent />
        <MonthCalender />
        <TodayMeals />
      </S.CalenderWrapper>
      <Footer />
    </S.MainWrapper>
  );
}

export default Calender;
