import React from "react";
import * as S from "./style";
import BackgroundTitle from '../BackgroundTitle'
import Footer from '../footer/Footer'
import { Profile ,Bike, Home, MealGreen, RightPassword, Triangle, AddChildren, WrongPassword } from '../../assets/index'
import UserInformation from './UserInformation/UserInformation'


function MyPage() {
    return(
        <S.MainWrapper>
            <BackgroundTitle title="마이페이지" />
            <S.MyPageWrapper>
                <div className="myPageItem">
                    <div className="itemBox">
                        <UserInformation />
                        <br/>
                        <S.ChangePassword>
                            <div className="changePasswordTitle"><h4>비밀번호 변경</h4>&nbsp;&nbsp;&nbsp;개인정보 보호를 위해 비밀번호는 주기적으로 변경해주세요.</div>
                            <br/>
                            <div className="changePasswordItem">
                                <div className="changepassworditeminput"><input placeholder="현재 비밀번호 입력" type="password"></input><img src={RightPassword} alt=""></img></div>
                                <div className="errormessage" id="nowPW-error">비밀번호가 일치하지 않습니다</div>
                                <div className="changepassworditeminput"><input placeholder="신규 비밀번호 입력" type="password"></input></div>
                                <div className="changepassworditeminput"><input placeholder="신규 비밀번호 재입력" type="password"></input><img src={WrongPassword} alt=""></img></div>
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
                                <div className="children-Status">
                                    <h5>손채건</h5>
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
                                                    <li id="status1"><b>다벌점 봉사 활동 내역</b></li>
                                                    <li id="status2">상벌점 내역 확인</li>
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
                                                    <li id="status3">외출 내역 확인</li>
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
                                                    <li id="status4">이번주 잔류 신청 상태</li>
                                                    <li id="status5">주말 급식 신청 여부</li>
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
                                    <div className="Title" id="statusRightTitle">다벌점 봉사활동 내역 확인</div>
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