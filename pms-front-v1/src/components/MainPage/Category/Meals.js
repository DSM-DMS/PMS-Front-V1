import React, { useState } from "react";
import * as S from "../style";

const Meals = () => {
  const btnLists = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const [select, setSelect] = useState(0);

  //급식버튼 중복 선택 안되게 하는 함수
  const mealBtnHandler = (list) => {
    setSelect(list.id);
  };

  return (
    <S.TodayMeals>
      <div className="container meal">
        <S.Title>오늘의 급식</S.Title>
        <S.MealMenu>
          <ul>
            <li>차조밥</li>
            <li>오징어 떡볶음</li>
            <li>배추김치</li>
            <li>떡국</li>
            <li>오징어 떡볶음</li>
            <li>오징어 떡볶음</li>
            <li>오징어 떡볶음</li>
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
