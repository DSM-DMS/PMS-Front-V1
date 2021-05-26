import React from "react";
import * as S from "./style";
import BackgroundTitle from '../BackgroundTitle'
import Footer from '../footer/Footer'
import { Profile ,Bike, Home, MealGreen, Triangle, AddChildren} from '../../assets/index'
import UserInformation from './UserInformation/UserInformation'
import ChangePassword from './ChangePassword/ChangePassword'


function MyPage() {
    return(
        <S.MainWrapper>
            <BackgroundTitle title="마이페이지" />
            <S.MyPageWrapper>
                <div className="myPageItem">
                    <div className="itemBox">
                        <UserInformation />
                        <br/>
                        <ChangePassword />
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