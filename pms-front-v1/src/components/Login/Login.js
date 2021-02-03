import React from "react";
import { Link } from 'react-router-dom';
import * as S from "./style";

import BackgroundTitle from "../BackgroundTitle";

function Login() {
  return (
    <S.MainWrapper>
      <BackgroundTitle title="로그인" />
      <S.LoginWrapper>
        <S.MainItem>
					<S.Title>
						<p>PMS 로그인</p>
						<Link to="sign-up">회원가입 하기 > </Link>
					</S.Title>
					<S.LoginInput>
						<input placeholder="이메일"></input>
						<input placeholder="비밀번호"></input>
						<button>로그인</button>
					</S.LoginInput>
				</S.MainItem>
      </S.LoginWrapper>
    </S.MainWrapper>
  );
}

export default Login;
