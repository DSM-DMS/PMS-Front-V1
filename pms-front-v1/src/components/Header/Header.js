import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  const [display, setDisplay] = useState("none");

  const mouseEvent = () => {
    setDisplay("flex");
  };
  const mouseOutEvent = () => {
    setDisplay("none");
  };

  return (
    <S.Header>
      <S.Nav className="nav">
        <Link to="/calender">행사일정</Link>
        <Link to="/school-info">학교소식</Link>
        <Link
          to="/club-info"
          onMouseMove={mouseEvent}
          onMouseLeave={mouseOutEvent}
        >
          소개
        </Link>
        <Link to="/my-mage">마이페이지</Link>
        <Link to="/login">로그인</Link>
      </S.Nav>
      <ul className="nav-link" style={{ display: display }}>
        <li className="link">
          <Link to="/company-info">취업처 소개</Link>
        </li>
        <li className="link">
          <Link to="/club-info">동아리 소개</Link>
        </li>
        <li className="link">
          <Link to="/company-info">개발자 소개</Link>
        </li>
      </ul>
    </S.Header>
  );
};

export default Header;
