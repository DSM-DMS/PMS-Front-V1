import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <Link to="/">학교소식</Link>
        <Link to="/">소개</Link>
        <Link to="/">마이페이지</Link>
        <Link to="login">로그인</Link>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
