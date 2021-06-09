import React from "react";
import * as S from "../style";
import { Arrow, MyPage, Profile } from "../../../assets";

const Mypage = (props) => {
  const isAccessToken = localStorage.getItem("access-token");

  const LoginBtnClick = () => {
    props.history.push("/login");
  };

  return (
    <S.StudentInfo>
      <div className="container club">
        <S.Title>마이페이지</S.Title>
        {isAccessToken ? (
          <>
            <S.StudentContainer>
              <span className="student-title">이명호 학부모님</span>
              <S.StudentNameScore>
                <div className="student-name-wrapper">
                  <img src={Profile} alt="프로필 사진" />
                  <div className="student-name">
                    <span>손채건</span>
                    <span>2학년 1반 10번 소프트웨어개발과</span>
                  </div>
                  <img className="arrow-img" src={Arrow} alt="화살표"></img>
                </div>
                <div className="student-score-wrppaer">
                  <span>기숙사 상태</span>
                  <div className="student-score">
                    <div className="circle">12</div>
                    <div className="circle">45</div>
                  </div>
                  <span>신청 상태</span>
                  <div className="student-score">
                    <div className="circle">12</div>
                    <div className="circle">45</div>
                  </div>
                </div>
              </S.StudentNameScore>
            </S.StudentContainer>
          </>
        ) : (
          <>
            <S.SubTitle>로그인 후 이용 가능합니다.</S.SubTitle>
            <S.LoginButton onClick={LoginBtnClick}>로그인</S.LoginButton>
          </>
        )}
      </div>
      {/*  <img src={MyPage} alt="마이페이지 사진"></img> */}
    </S.StudentInfo>
  );
};

export default Mypage;
