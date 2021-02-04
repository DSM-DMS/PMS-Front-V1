import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

import BackgroundTitle from "../BackgroundTitle";
import SocialButton from "./SocialButton";
import Footer from "../footer/Footer";

function Login() {
  return (
    <S.MainWrapper>
      <BackgroundTitle title="로그인" />
      {/* 로그인 박스 */}
      <S.LoginWrapper>
        <S.MainItem>
          <S.Title>
            <p>PMS 로그인</p>
            <Link to="sign-up">회원가입 하기 > </Link>
          </S.Title>
          {/* 로그인 입력창 */}
          <S.LoginInput>
            <S.InputWrapper>
              <input type="text" placeholder="이메일"></input>
              <input type="password" placeholder="비밀번호"></input>
              <div className="auto-login">
                <input type="checkbox"></input>
                <span>자동 로그인</span>
              </div>
              <button>로그인</button>
            </S.InputWrapper>
            {/* 소셜 로그인 */}
            <S.SocialWrapper>
              <SocialButton LoginName="FaceBook 로그인" />
              <SocialButton LoginName="Google 로그인" />
              <SocialButton LoginName="KaKaotalk 로그인" />
              <SocialButton LoginName="Naver 로그인" />
            </S.SocialWrapper>
          </S.LoginInput>
        </S.MainItem>
      </S.LoginWrapper>
      <Footer></Footer>
    </S.MainWrapper>
  );
}

export default Login;
