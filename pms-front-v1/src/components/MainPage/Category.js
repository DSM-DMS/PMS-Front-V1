import React, { useState } from "react";
import * as S from "./style";
import { useHistory } from "react-router-dom";

const btnLists = [{ id: 1 }, { id: 2 }, { id: 3 }];

const Category = () => {
  const history = useHistory();
  const [select, setSelect] = useState(0);

  const ClubClickHandler = () => {
    history.push("club-info");
  };

  const CompanyClickHandler = () => {
    history.push("company-info");
  };

  const DMSClickHandler = () => {
    history.href("/https://www.dsm-dms.com/");
  };

  const LoginBtnClick = () => {
    history.push("/login");
  };

  const DeveloperClickHandler = () => {
    history.push("/creators-info");
  };

  //급식버튼 중복 선택 안되게 하는 함수
  const mealBtnHandler = (list) => {
    setSelect(list.id);
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
                <span>학교소식</span>
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
        <S.ClubInfo onClick={ClubClickHandler}>
          <div className="container club">
            <S.Title>동아리 소개</S.Title>
            <div className="club-info">
              <S.Font14>대덕소프트웨어마이스터고등학교</S.Font14>
              <S.Font14>다양한 동아리를 소개합니다</S.Font14>
            </div>
          </div>
        </S.ClubInfo>
        {/* 취업처 소개 */}
        <S.CompanyInfo onClick={CompanyClickHandler}>
          <div className="container club">
            <S.Title>취업처 소개</S.Title>
            <div className="club-info">
              <S.Font14>대덕소프트웨어마이스터고등학교</S.Font14>
              <S.Font14>학생들의 취업처를 소개합니다</S.Font14>
            </div>
          </div>
          <div className="club-img"></div>
        </S.CompanyInfo>
        {/* DMS 구경하기 */}
        <S.DMSInfo onClick={DMSClickHandler}></S.DMSInfo>
      </S.CategoryItem>
      {/* 마이페이지, 로그인 묶음 */}
      <S.CategoryItemBottom>
        <S.StudentInfo>
          <div className="container club">
            <S.Title>마이페이지</S.Title>
            <S.SubTitle>로그인 후 이용 가능합니다.</S.SubTitle>
            <S.LoginButton onClick={LoginBtnClick}>로그인</S.LoginButton>
          </div>
          <div className="student-info-img"></div>
        </S.StudentInfo>
        {/* 오늘의 급식 */}
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

        {/* 개발자 소개, PMS 소개  */}
        <S.InfoWrapper>
          <S.DeveloperInfo>
            <div className="pms-info" onClick={DeveloperClickHandler}>
              <S.Title>개발자 소개</S.Title>
              <S.Font14>
                PMS 학부모 서비스를 개발한 대덕소프트웨어마이스터고에 재학중인
                학생들 소개입니다. 많은 응원과 칭찬을 나눠주세요. PMS를
                이용해주셔서 감사합니다.
              </S.Font14>
            </div>
            {/* 개발자 이미지 안뜸 */}
            <div classNmae="creators-info"></div>
          </S.DeveloperInfo>
          <S.PMSInfo>
            <div className="pms-info">
              <S.Title>PMS 학부모 서비스</S.Title>
              <S.Font14>
                PMS 학부모 서비스는 가정통신문, 학교소식, 오늘의 급식, 학교의
                동아리, 재학생의 취업처를 알 수 있을 뿐만 아니라 자녀의 기숙사의
                정보를 알 수 있습니다.
              </S.Font14>
            </div>
            <div className="pms-img"></div>
          </S.PMSInfo>
        </S.InfoWrapper>
      </S.CategoryItemBottom>
    </S.CategoryWrapper>
  );
};

export default Category;
