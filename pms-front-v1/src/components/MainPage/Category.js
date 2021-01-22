import React from "react";
import * as S from "./style";

/* const schoolList = () => {
	
} */

const Category = () => {
  return (
    //카테고리 묶는 컴포넌트
    <S.CategoryWrapper>
      {/* 학교소식, 동아리소개, 취업처 소개 묶음 */}
      <S.CategoryItem>
        {/* 학교소식 */}
        <S.SchoolInfo>
          <S.Title>학교소식</S.Title>
          <S.ButtonItem>학교행사</S.ButtonItem>
          <S.ButtonItem>가정통신문</S.ButtonItem>
          <S.InfoList>대덕어쩌고 저쩌고</S.InfoList>
        </S.SchoolInfo>
        {/* 동아리 소개  */}
        <S.ClubInfo></S.ClubInfo>
        {/* 취업처 소개 */}
        <S.CompanyInfo></S.CompanyInfo>
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
