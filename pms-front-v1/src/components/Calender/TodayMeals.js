import React, { useEffect, useState } from "react";
import * as S from "./style";
import EventList from "./EventList";
import { requestJW } from "../../utils/axios/axios";

function TodayMeals(t) {
  const [selected, setSelected] = useState(1);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [mealImg, setMealImg] = useState([]);
  const [listDisplay, setListDisplay] = useState("flex");
  const [imgDisplay, setImgDisplay] = useState("none");

  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (1 + date.getMonth())).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);

  let TodayDate = year + "" + month + "" + day;

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

  useEffect(() => {
    const getMealAPI = async () => {
      try {
        const { data } = await requestJW(
          "get",
          `event/meal/${TodayDate}`,
          "",
          {}
        );
        setBreakfast(data.breakfast);
        setLunch(data.lunch);
        setDinner(data.dinner);
      } catch (e) {
        console.log(e);
      }
    };

    const getMealImgAPI = async () => {
      try {
        const data = await requestJW(
          "get",
          `event/meal/picture/${TodayDate}`,
          {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
          ""
        );
        setMealImg(data.data);
        console.log(data.data.breakfast);
        console.log(data);
      } catch (e) {
        if (e.response.status === 400) {
          setMealImg(null);
        }
      }
    };

    getMealImgAPI();
    getMealAPI();
  }, [TodayDate]);

  const mealImgClickHandler = () => {
    if (listDisplay === "none" && imgDisplay === "flex") {
      setTimeout(() => {
        setListDisplay("flex");
        setImgDisplay("none");
      }, 500);
    } else {
      setTimeout(() => {
        setListDisplay("none");
        setImgDisplay("flex");
      }, 500);
    }
  };

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

  const MealButtonClickHandler = (row) => {
    setSelected(row.id);
  };

  return (
    <S.SideWrapper>
      <S.Title>오늘의 급식</S.Title>
      <S.SelectData>
        {month}월 {day}일 {getTodayLabel(date)}
      </S.SelectData>
      <S.MealsList onClick={mealImgClickHandler}>
        {selected === 1
          ? breakfast.map((i, index) => (
              <span style={{ display: listDisplay }} key={index}>
                {i}
              </span>
            ))
          : selected === 2
          ? lunch.map((i, index) => (
              <span style={{ display: listDisplay }} key={index}>
                {i}
              </span>
            ))
          : dinner.map((i, index) => (
              <span style={{ display: listDisplay }} key={index}>
                {i}
              </span>
            ))}
        {mealImg === null ? (
          <div style={{ display: imgDisplay }}>
            오늘의 급식 사진이 없습니다.
          </div>
        ) : (
          <img
            style={{ display: imgDisplay }}
            src={
              selected === 1
                ? mealImg.breakfast
                : selected === 2
                ? mealImg.lunch
                : mealImg.dinner
            }
            alt="급식사진"
          />
        )}
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
