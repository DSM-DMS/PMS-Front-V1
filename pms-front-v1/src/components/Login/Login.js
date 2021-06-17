import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as S from "./style";
import { BackgroundTitle, SocialButton, Footer } from "../index";
import { LoginError } from "../../assets";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/userAction";

function Login() {
  const history = useHistory();
  const [errorIcon, setErrorIcon] = useState("none");
  const [borderBottom, setBorderBottom] = useState("");
  const [width, setWidth] = useState("");

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginUser(inputs))
      .then((res) => {
        console.log(res);
        localStorage.setItem("access-token", res.payload.data["access-token"]);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setErrorIcon("flex");
        setBorderBottom("2px solid #FF0000");
        setWidth("100%");
      });

    setInputs({
      email: "",
      password: "",
    });
  };

  return (
    <S.MainWrapper>
      <BackgroundTitle title="로그인" />
      {/* 로그인 박스 */}
      <S.LoginWrapper>
        <S.MainItem onSubmit={handleSubmit}>
          <S.Title>
            <p>PMS 로그인</p>
            <Link to="sign-up">회원가입 하기 {">"} </Link>
          </S.Title>
          {/* 로그인 입력창 */}
          <S.LoginInput>
            <S.InputWrapper>
              <input
                onChange={onChange}
                name="email"
                type="email"
                placeholder="이메일"
                value={email}
              ></input>
              <div
                className="password-wrapper"
                style={{ borderBottom: borderBottom }}
              >
                <input
                  style={{ borderBottom: borderBottom }}
                  onChange={onChange}
                  name="password"
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                ></input>
                <img
                  style={{ display: errorIcon }}
                  src={LoginError}
                  alt="로그인 오류"
                ></img>
              </div>
              <span
                className="error-message"
                style={{ width: width, display: errorIcon }}
              >
                이메일 혹은 비밀번호를 다시 입력해주세요.
              </span>
              <div className="auto-login">
                <input type="checkbox"></input>
                <span>자동 로그인</span>
              </div>
              <button type="submit">로그인</button>
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
      <Footer />
    </S.MainWrapper>
  );
}

export default Login;
