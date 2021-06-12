import React, { useEffect } from "react";
import * as S from "../style";
import { Arrow, MyPage, Profile } from "../../../assets";
import { StudentUser } from "../../../utils/api/user";

const Mypage = (props) => {
  const isAccessToken = localStorage.getItem("access-token");
  const studentName = "student-name";

  const LoginBtnClick = () => {
    props.history.push("/login");
  };

  useEffect(() => {}, []);

  const user = StudentUser();
  console.log(user);

  useEffect(() => {
    console.log(user?.students[0]?.[`${studentName}`]);
  }, [user?.students]);

  return (
    <S.StudentInfo>
      <div className="container club">
        <S.Title>마이페이지</S.Title>
        {isAccessToken ? (
          <>
            <S.StudentContainer>
              <span className="student-title">{user?.name} 학부모님</span>
              <S.StudentNameScore>
                <div className="student-name-wrapper">
                  <img
                    className="profile-img"
                    src={Profile}
                    alt="프로필 사진"
                  />
                  <div className="student-name">
                    <span></span>
                    <span>2학년 1반 10번 소프트웨어개발과</span>
                  </div>
                  <img className="arrow-img" src={Arrow} alt="화살표"></img>
                </div>
                <div className="student-score-wrppaer">
                  <span>기숙사 상태</span>
                  <div className="student-score">
                    <div className="point" style={{ marginRight: "10px" }}>
                      12
                    </div>
                    <div
                      className="point"
                      style={{ backgroundColor: "#D37C7C" }}
                    >
                      45
                    </div>
                  </div>
                  <span>신청 상태</span>
                  <div className="student-score">
                    <div className="point" style={{ marginRight: "10px" }}>
                      12
                    </div>
                    <div
                      className="point"
                      style={{
                        backgroundColor: "#D37C7C",
                      }}
                    >
                      45
                    </div>
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
      <img src={MyPage} alt="마이페이지 사진"></img>
    </S.StudentInfo>
  );
};

export default Mypage;
