import React, { useState } from "react";
import * as S from "./style";

const Category = () => {
  const [buttonColor, setButtonColor] = useState("none");
  const [buttonFont, setButtonFont] = useState("white");

  const buttonClickHandler = () => {
    console.log("확인");
    setButtonColor("white");
    setButtonFont("#d37c7c");
  };

  return (
    //카테고리 묶는 컴포넌트
    <S.CategoryWrapper>
      {/* 학교소식, 동아리소개, 취업처 소개 묶음 */}
      <S.CategoryItem>
        {/* 학교소식 */}
        <S.SchoolInfo>
          <div className="container">
            <S.Title>학교소식</S.Title>
            <S.ButtonItem>
              <input
                type="radio"
                nape="box-control"
                id="control1"
                hidden
                checked
              />
              <input type="radio" nape="box-control" id="control1" hidden />
              <label for="control1">
                <span>가정통신문</span>
              </label>
              <label for="control2">
                <span>학교 소식</span>
              </label>
            </S.ButtonItem>
            <S.InfoList>
              <li>대덕어쩌고 저쩌고</li>
              <li>대덕어쩌고 저쩌고</li>
              <li>대덕어쩌고 저쩌고</li>
              <li>대덕어쩌고 저쩌고</li>
              <li>대덕어쩌고 저쩌고</li>
            </S.InfoList>
          </div>
        </S.SchoolInfo>
        {/* 동아리 소개  */}
        <S.ClubInfo>
          <div className="container club">
            <S.Title>동아리 소개</S.Title>
            <div className="club-info">
              <span>대덕소프트웨어마이스터고등학교에</span>
              <span>동아리를 소개합니다</span>
            </div>
          </div>
        </S.ClubInfo>
        {/* 취업처 소개 */}
        <S.CompanyInfo>
          <div className="container club">
            <S.Title>취업처 소개</S.Title>
            <div className="club-info">
              <span>대덕소프트웨어마이스터고등학교에</span>
              <span>취업처를 소개합니다</span>
            </div>
            <div className="club-img"></div>
          </div>
        </S.CompanyInfo>
        {/* DMS 구경하기 */}
        <S.DMSInfo></S.DMSInfo>
      </S.CategoryItem>
      {/* 마이페이지, 로그인 묶음 */}
      <S.CategoryItemBottom>
        <S.StudentInfo></S.StudentInfo>
        <S.TodayMeals></S.TodayMeals>
        <S.InfoWrapper>
          <S.DeveloperInfo></S.DeveloperInfo>
          <S.PMSInfo></S.PMSInfo>
        </S.InfoWrapper>
      </S.CategoryItemBottom>
    </S.CategoryWrapper>
  );
};

export default Category;
