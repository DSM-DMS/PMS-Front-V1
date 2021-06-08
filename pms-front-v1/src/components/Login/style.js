import styled from "styled-components";

const MainWrapper = styled.div`
  height: 1100px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
`;

const LoginWrapper = styled.div`
  position: relative;
  top: -7%;
  margin: 0 auto;
  width: 78%;
  height: 680px;
  background-color: white;
  box-shadow: 0px 5px 5px #00000029;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainItem = styled.form`
  margin: auto 0;
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;

  p {
    font-size: 35px;
  }
  a {
    font-size: 15px;
    color: #4c75b2;
    text-decoration: none;
  }
`;

const LoginInput = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: row;

  justify-content: center;
  width: 100%;
  height: 80%;
`;

const InputWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1.5px solid #9e9e9e;

  input {
    padding-left: 5px;
    margin: 0 20px 15px 0;
    border: 0;
    border-bottom: 1px solid #c8c8c8;
    outline: none;
    width: 280px;
    height: 30px;
    font-size: 18px;
  }

  button {
    margin: 0 auto;
    width: 200px;
    height: 40px;
    background: #4c75b2 0% 0% no-repeat padding-box;
    border-radius: 5px;
    color: white;
    outline: none;
    border: none;
    font-size: 16px;
  }

  //자동 로그인
  span {
    font-size: 15px;
  }

  .auto-login {
    display: flex;
    align-items: center;
    width: 100%;
    color: #9e9e9e;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 50px;
  }
  .auto-login input {
    margin: 5px;
    width: 20px;
    height: 20px;
    border: 1px solid #c8c8c8;
    border-radius: 5px;
  }

  .error-message {
    color: gray;
  }

  .password-wrapper {
    padding-left: 5px;
    margin: 0 20px 15px 0;
    border: 0;
    border-bottom: 1px solid #c8c8c8;
    outline: none;
    width: 280px;
    height: 30px;
    font-size: 18px;
    display: flex;
    flex-direction: row;

    & input {
      padding: 0;
    }

    & img {
      display: ${({ display }) => display};
    }
  }
`;

const SocialWrapper = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 30px;
  margin-left: 30px;
`;

const LoginButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  width: 240px;
  height: 40px;

  .social-img {
    width: 48px;
    height: 40px;
    background-image: ${({ Socialimg }) => Socialimg};
  }

  .login-name {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 100%;
    height: 98%;
    text-align: center;
    background-color: ${({ LoginName }) => LoginName};
  }
`;

export {
  MainWrapper,
  LoginWrapper,
  LoginInput,
  MainItem,
  Title,
  InputWrapper,
  SocialWrapper,
  //소셜 로그인
  LoginButton,
};
