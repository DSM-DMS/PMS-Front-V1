import React from "react";
import { useHistory } from "react-router";
import * as S from "../style";

const CompanyInfo = () => {
  const history = useHistory();

  const CompanyClickHandler = () => {
    history.push("company-info");
  };

  return (
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
  );
};

export default CompanyInfo;
