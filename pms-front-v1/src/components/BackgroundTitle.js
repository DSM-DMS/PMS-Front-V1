//모든 페이지 헤더와 같이 있는 배경 타이틀

import React from "react";
import * as S from "./BackgrounTitleStyle";

import Header from "./Header/Header";

function BackgroundTitle(props) {
  //props 로 "" 빈 값을 주면 display none을 주게됨
  const title = props.title === "" ? "none" : "block";

  return (
    <S.BackgroundWrapper>
      <Header />
      <S.TitleWrapper >
        <S.TopLine title={props.title} style={{ display: title }} />
        <S.Title style={{ display: title }}>{props.title}</S.Title>
      </S.TitleWrapper>
    </S.BackgroundWrapper>
  );
}
export default BackgroundTitle;
