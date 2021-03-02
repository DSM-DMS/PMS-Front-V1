import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <Link to="/calender">행사일정</Link>
        <Link to="/school-info">학교소식</Link>
        <Link to="/club-info">소개</Link>
        <Link to="/my-mage">마이페이지</Link>
        <Link to="/login">로그인</Link>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
