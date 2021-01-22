import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        {/* <Link to="/">학교 소식</Link>
        <Link to="/">소개</Link>
        <Link to="/">마이페이지</Link>
        <Link to="/">로그인</Link> */}
        
        <S.Link>학교소식</S.Link>
        <S.Link>소개</S.Link>
        <S.Link>마이페이지</S.Link>
        <S.Link>로그인</S.Link>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
