import React from "react";
import * as S from "./style";
import { FaceBook, kakao, Google } from "../../assets/index";

const SocialButton = (props) => {
  //로그인 색
  const LoginName =
    props.LoginName === "FaceBook 로그인"
      ? "#3B5998"
      : props.LoginName === "Google 로그인"
      ? "#3083FF"
      : props.LoginName === "KaKaotalk 로그인"
      ? "#3E2723"
      : "#00C63B";

  const Socialimg =
    props.LoginName === "FaceBook 로그인"
      ? `url(${FaceBook})`
      : props.LoginName === "Google 로그인"
      ? `url(${Google})`
      : props.LoginName === "KaKaotalk 로그인"
      ? `url(${kakao})`
      : "";

  return (
    <S.LoginButton>
      <div className="social-img" style={{ backgroundImage: Socialimg }}></div>
      <div className="login-name" style={{ backgroundColor: LoginName }}>
        {props.LoginName}
      </div>
    </S.LoginButton>
  );
};

export default SocialButton;
