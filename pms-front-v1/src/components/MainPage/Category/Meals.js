import React, { useEffect, useState } from "react";
import { FetchMeal } from "../../../utils/api/user";
import { requestJW } from "../../../utils/axios/axios";
import * as S from "../style";

const btnLists = [{ id: 1 }, { id: 2 }, { id: 3 }];

const Meals = () => {
  const [select, setSelect] = useState(1);
 
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  let TodayDate = year + "" + month + "" + day;

  const mealBtnHandler = (list) => {
    setSelect(list.id);
  };

  const fetchMeal = FetchMeal(TodayDate);

  return (
    <S.TodayMeals>
      <div className="container meal">
        <S.Title>오늘의 급식</S.Title>
        <S.MealMenu>
          <ul>
            {select === 1
              ? fetchMeal?.breakfast.map((i, index) => <li key={index}>{i}</li>)
              : select === 2
              ? fetchMeal?.lunch.map((i, index) => <li key={index}>{i}</li>)
              : fetchMeal?.dinner.map((i, index) => <li key={index}>{i}</li>)}
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
