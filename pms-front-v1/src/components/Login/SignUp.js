import React from "react";
import { Link } from 'react-router-dom';
import * as S from "./style";

import BackgroundTitle from "../BackgroundTitle";
import SocialButton from "./SocialButton";
import Footer from "../footer/Footer";

function SignUp() {
  return (
    <S.MainWrapper>
      <BackgroundTitle title="회원가입" />
      {/* 회원가입 박스 */}
      <S.LoginWrapper>
        <S.MainItem>
          <S.Title>
            <p>PMS 회원가입</p>
						<Link to="/login">로그인 하기 > </Link>
          </S.Title>
          {/* 로그인 입력창 */}
          <S.LoginInput>
            <S.InputWrapper>
              <input type="text" placeholder="이름"></input>
              <input type="text" placeholder="확인코드"></input>
              <input type="text" placeholder="이메일"></input>
              <input type="password" placeholder="비밀번호"></input>
              <input type="password" placeholder="비밀번호 확인"></input>
              <button>가입하기</button>
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

export default SignUp;
