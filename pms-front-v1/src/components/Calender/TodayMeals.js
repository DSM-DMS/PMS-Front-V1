import React, { useEffect, useState } from "react";
import * as S from "./style";

import EventList from "./EventList";
import { requestJW } from "../../utils/axios/axios";

function TodayMeals() {
  //버튼이 선택되었는지 확인하는 변수
  const [selected, setSelected] = useState(0);
  const [todayMeals, setTodayMeals] = useState("");

  //오늘의 날짜
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  let TodayDate = year + "" + month + "" + day;

  console.log(TodayDate);

  function getTodayLabel() {
    var week = new Array(
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일"
    );

    var today = new Date().getDay();
    var todayLabel = week[today];

    return todayLabel;
  }

  const getMeal = async () => {
    try {
      const { data } = await requestJW(
        "get",
        `event/meal/${TodayDate}`,
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        {}
      );
      setTodayMeals(data);
      console.log(setTodayMeals);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMeal();
  }, []);

  //오늘의 급식 더미데이터
  const meals = [
    {
      menu: "닭볶음탕",
    },
    {
      menu: "닭볶음탕",
    },
    {
      menu: "닭볶음탕",
    },
    {
      menu: "닭볶음탕",
    },
  ];

  //중복선택이 안되게 하기 위해 리스트 선언
  const buttonLists = [
    {
      id: 1,
      button: "아침",
    },
    {
      id: 2,
      button: "점심",
    },
    {
      id: 3,
      button: "저녁",
    },
  ];

  //아침, 점심, 저녁 버튼 클릭하면 색 바뀌게 하는 이벤트 핸들러
  const MealButtonClickHandler = (row) => {
    setSelected(row.id);
  };

  return (
    <S.SideWrapper>
      <S.Title>오늘의 급식</S.Title>
      <S.SelectData>
        {month}월 {day}일 {getTodayLabel(date)}
      </S.SelectData>
      <S.MealsList>
        {meals.map((meal) => {
          return <span>{meal.menu}</span>;
        })}
      </S.MealsList>
      <S.Nav>
        {buttonLists.map((buttonList) => {
          return (
            <S.MealButton
              key={buttonList.id}
              onClick={() => MealButtonClickHandler(buttonList)}
              style={{
                backgroundColor:
                  buttonList.id === selected ? "#56ad9e" : "white",
                color: buttonList.id === selected ? "white" : "black",
              }}
            >
              {buttonList.button}
            </S.MealButton>
          );
        })}
      </S.Nav>
      <S.ListWrapper>
        <EventList />
      </S.ListWrapper>
    </S.SideWrapper>
  );
}

export default TodayMeals;
