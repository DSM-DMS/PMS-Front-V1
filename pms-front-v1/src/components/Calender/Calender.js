import React, { useEffect, useState } from "react";
import * as S from "./style";

import BackgroundTitle from "../BackgroundTitle";
import Footer from "../footer/Footer";
import MonthEvent from "./MonthEvent";
import MonthCalender from "./MonthCalender";
import TodayMeals from "./TodayMeals";
import { requestJW } from "../../utils/axios/axios";

function Calender() {

  return (
    <S.MainWrapper>
      <BackgroundTitle title="" />
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
