import React from "react";
import * as S from "./style";
import { useHistory } from "react-router-dom";
import { SchoolInfo, Meals, ClubCategory} from "../index";
import CompanyInfo from "./Category/CompanyInfo";

const Category = () => {
  const history = useHistory();

  const ClubClickHandler = () => {
    history.push("club-info");
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

  return (
    <S.CategoryWrapper>
      <S.CategoryItem>
        <SchoolInfo />
        <ClubCategory onClick={ClubClickHandler} />
        <CompanyInfo />
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

        <Meals />
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
