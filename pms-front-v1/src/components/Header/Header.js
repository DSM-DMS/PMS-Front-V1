import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Header = () => {
  const [display, setDisplay] = useState("none");
  const [hover, setHover] = useState("black");

  const mouseEvent = () => {
    setDisplay("flex");
  };
  const mouseOutEvent = () => {
    setDisplay("none");
  };

  const hoverEvent = () => {
   setHover("#350871 ");
  };

  return (
    <S.Header>
      <S.Nav className="nav">
        <Link to="/calender">행사일정</Link>
        <Link to="/school-info">학교소식</Link>
        <Link
          style={{ padding: "30px 0" }}
          to="/club-info"
          onMouseMove={mouseEvent}
          onMouseLeave={mouseOutEvent}
        >
          소개
        </Link>
        <Link to="/my-mage">마이페이지</Link>
        <Link to="/login">로그인</Link>
      </S.Nav>
      <ul
        id="headModal"
        className="nav-link"
        onMouseMove={mouseEvent}
        onMouseLeave={() => mouseOutEvent()}
        style={{ display: display }}
      >
        <li className="link">
          <Link
            to="/company-info"
            style={{ color: hover }}
            onMouseMove={hoverEvent}
          >
            취업처 소개
          </Link>
        </li>
        <li className="link">
          <Link
            to="/club-info"
            style={{ color: hover }}
            onMouseMove={hoverEvent}
          >
            동아리 소개
          </Link>
        </li>
        <li className="link">
          <Link
            to="/company-info"
            style={{ color: hover }}
            onMouseMove={hoverEvent}
          >
            개발자 소개
          </Link>
        </li>
      </ul>
    </S.Header>
  );
};

export default Header;
