import React from "react";
import * as S from "./style";
import BackgroundTitle from '../BackgroundTitle'
import Footer from '../footer/Footer'
import { Profile ,Bike, Home, MealGreen, RightPassword, Triangle, AddChildren } from '../../assets/index'


function MyPage() {
    let nickName ="이재원";
    let childrenName ="손채건";
    let email = "wlsdn5793@gmail.com"
    return(
        <S.MainWrapper>
            <BackgroundTitle title="마이페이지" />
            <S.MyPageWrapper>
                <div className="myPageItem">
                    <div className="itemBox">
                        <S.UesrInformation>
                            <h4>개인 정보</h4><br/>
                            <div className="userInformationItem">
                                <div className="ItemTitle">이메일</div>
                                <div className="ItemContent">{email}</div>
                            </div>
                            <div className="userInformationItem bot">
                                <div className="ItemTitle">닉네임</div>
                                <input value={nickName}></input>
                            </div>
                        </S.UesrInformation><br/>
                        <S.ChangePassword>
                            <div className="changePasswordTitle"><h4>비밀번호 변경</h4>&nbsp;&nbsp;&nbsp;개인정보 보호를 위해 비밀번호는 주기적으로 변경해주세요.</div>
                            <br/>
                            <div className="changePasswordItem">
                                <div className="changepassworditeminput"><input placeholder="현재 비밀번호 입력" type="password"></input><img src={RightPassword} alt=""></img></div>
                                <div className="errormessage">비밀번호가 일치하지 않습니다</div>
                                <div className="changepassworditeminput"><input placeholder="신규 비밀번호 입력" type="password"></input></div>
                                <div className="changepassworditeminput"><input placeholder="신규 비밀번호 재입력" type="password"></input><img src={RightPassword} alt=""></img></div>
                                <div className="errormessage">비밀번호가 일치하지 않습니다</div>
                                <button>확인</button>
                            </div>
                        </S.ChangePassword>
                    </div>
                    <div className="itemBox">
                        <h4>자녀정보</h4><br/>
                        <div className="childrenInformation">
                            <S.MyChildren>
                                <div className="childrenprofile">
                                    <img src={Profile} alt=""></img>
                                </div>
                                <div className="childreninformation">
                                    <h5>{childrenName}</h5>
                                    1학년 1반 11번 - 공통교육과정
                                </div>
                            </S.MyChildren>
                            <S.ChildrenStatus>
                                <div className="childrenStatus">
                                    <S.ChildrenStatusItem>
                                        <div className="itemTitle">기숙사 생활</div>
                                        <div className="childrenStatusItemMain">
                                            <div className="checkstatus">
                                                <ul>
                                                    <li><b>다벌점 봉사 활동 내역</b></li>
                                                    <li>상벌점 내역 확인</li>
                                                </ul>
                                            </div>
                                            <div className="rightimg">
                                                <div className="score plus">1</div>
                                                <div className="score minus">12</div>
                                            </div>
                                        </div>
                                    </S.ChildrenStatusItem>
                                    <S.ChildrenStatusItem>
                                        <div className="itemTitle">학교 생활</div>
                                        <div className="childrenStatusItemMain">
                                            <div className="checkstatus">
                                                <ul>
                                                    <li>외출 내역 확인</li>
                                                </ul>
                                            </div>
                                            <div className="rightimg">
                                                <img src={Bike} alt=""></img>
                                            </div>
                                        </div>
                                    </S.ChildrenStatusItem>
                                    <S.ChildrenStatusItem>
                                        <div className="itemTitle">신청 상태</div>
                                        <div className="childrenStatusItemMain">
                                            <div className="checkstatus">
                                                <ul>
                                                    <li>이번주 잔류 신청 상태</li>
                                                    <li>주말 급식 신청 여부</li>
                                                </ul>
                                            </div>
                                            <div className="rightimg">
                                                <img src={Home} alt=""></img>
                                                <img src={MealGreen} alt=""></img>
                                            </div>
                                        </div>
                                    </S.ChildrenStatusItem>
                                    <S.ChildrenStatusItem>
                                        <div className="itemTitle">동아리</div>
                                        <div className="childrenStatusItemMain">
                                            <div className="checkstatus">
                                                <ul>
                                                    <li>DMS</li>
                                                </ul>
                                            </div>
                                            <div className="rightimg">
                                            </div>
                                        </div>
                                    </S.ChildrenStatusItem>
                                </div>
                                <div className="childrenStatus right">
                                    <div className="Title">다벌점 봉사활동 내역 확인</div>
                                    <S.Activity>
                                        <div className="TiTle"><h3>1차 봉사 활동</h3>2021-01-01</div>
                                        <div className="point">+15</div>
                                    </S.Activity>
                                </div>
                            </S.ChildrenStatus>
                        </div>
                    </div>
                </div>
            </S.MyPageWrapper>
            <Footer />
        </S.MainWrapper>
    )
}

export default MyPage;