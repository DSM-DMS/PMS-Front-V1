//모든 페이지 헤더와 같이 있는 배경 타이틀

import React from "react";
import * as S from "./BackgrounTitleStyle";

import Header from "./Header/Header";

function BackgroundTitle(props) {
  return (
    <S.BackgroundWrapper>
      <Header />
      <S.TitleWrapper>
        <S.TopLine />
        <S.Title>{props.title}</S.Title>
      </S.TitleWrapper>
    </S.BackgroundWrapper>
  );
}
export default BackgroundTitle;
