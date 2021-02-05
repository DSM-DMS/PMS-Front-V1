import React from "react";
import * as S from "./style";

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

  return (
    <S.LoginButton color={LoginName}>
      <button>{props.LoginName}</button>
    </S.LoginButton>
  );
};

export default SocialButton;
