import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { BackgroundTitle, SocialButton, Footer } from "../index";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/userAction";

function SignUp() {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const { name, email, password, passwordCheck } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //회원가입
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(registerUser(inputs))
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

    setInputs({
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    });
  };

  return (
    <S.MainWrapper>
      <BackgroundTitle title="회원가입" />
      {/* 회원가입 박스 */}
      <S.LoginWrapper>
        <S.MainItem onSubmit={handleSubmit}>
          <S.Title>
            <p>PMS 회원가입</p>
            <Link to="/login">로그인 하기 {">"} </Link>
          </S.Title>
          {/* 로그인 입력창 */}
          <S.LoginInput>
            <S.InputWrapper /* onKeyUp={SignUp} */>
              <input
                onChange={onChange}
                name="name"
                type="text"
                placeholder="이름"
                value={name}
              ></input>
              <input
                onChange={onChange}
                name="email"
                type="text"
                placeholder="이메일"
                value={email}
              ></input>
              <input
                onChange={onChange}
                name="password"
                type="password"
                placeholder="비밀번호"
                value={password}
              ></input>
              <input
                onChange={onChange}
                name="passwordCheck"
                type="password"
                placeholder="비밀번호 확인"
                value={passwordCheck}
              ></input>
              <button type="submit">가입하기</button>
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
