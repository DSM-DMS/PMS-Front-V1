import React from "react";
import * as S from "./style";
import Header from "../Header/Header";
import Category from "./Category";

function MainPage() {
  return (
    <S.MainWrapper>
      <Header />
      <S.CodingImg>
        <div className="SchoolTitle">
          <p className="bottomLine"></p>
          <p>대덕소프트웨어마이스터고등학교</p>
          <p>창의성과 인간미를 품은 소트프웨어 영재의 육성</p>
        </div>
        <Category />
      </S.CodingImg>
    </S.MainWrapper>
  );
}

export default MainPage;
