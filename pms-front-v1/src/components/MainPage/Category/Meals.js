import React, { useEffect, useState } from "react";
import { requestJW } from "../../../utils/axios/axios";
import * as S from "../style";

const btnLists = [{ id: 1 }, { id: 2 }, { id: 3 }];

const Meals = () => {
  const [select, setSelect] = useState(1);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);

  //급식버튼 중복 선택 안되게 하는 함수
  const mealBtnHandler = (list) => {
    setSelect(list.id);
  };

  // 메인페이지  급식 api
  const getMealsApi = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    let TodayDate = year + "" + month + "" + day;

    try {
      const { data } = await requestJW(
        "get",
        `event/meal/${TodayDate}`,
        {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
        {}
      );
      setBreakfast(data.breakfast);
      setLunch(data.lunch);
      setDinner(data.dinner);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMealsApi();
  }, []);

  return (
    <S.TodayMeals>
      <div className="container meal">
        <S.Title>오늘의 급식</S.Title>
        <S.MealMenu>
          <ul>
            {select === 1
              ? breakfast.map((i, index) => <li key={index}>{i}</li>)
              : select === 2
              ? lunch.map((i, index) => <li key={index}>{i}</li>)
              : dinner.map((i, index) => <li key={index}>{i}</li>)}
          </ul>
        </S.MealMenu>
        <S.MealButton>
          {btnLists.map((list) => (
            <div
              style={{
                backgroundColor: list.id === select ? "gray" : "white",
                borderRadius: "50px",
              }}
              key={list.id}
              onClick={() => mealBtnHandler(list)}
            ></div>
          ))}
        </S.MealButton>
      </div>
    </S.TodayMeals>
  );
};

export default Meals;
