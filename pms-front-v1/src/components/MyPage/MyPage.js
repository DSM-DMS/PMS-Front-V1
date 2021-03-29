import React from "react";
import * as S from "./style";
import BackgroundTitle from '../BackgroundTitle'
import Footer from '../footer/Footer'
import {ReactComponent as Profile} from '../../assets/Prifile.svg'
import {ReactComponent as Bike} from '../../assets/Bike.svg'
import {ReactComponent as Home} from '../../assets/Home.svg'
import {ReactComponent as MealGreen} from '../../assets/MealGreen.svg'
import {ReactComponent as RightPassword} from '../../assets/RightPassword.svg' 


function MyPage() {
    return(
        <S.MainWrapper>
            <BackgroundTitle title="마이페이지"></BackgroundTitle>
            <S.MyPageWrapper>
                <S.MyPageItem>
                    <S.ItemBox>
                        <S.UesrInformation>
                            <h4>개인 정보</h4><br/>
                            <S.UesrInformationItemTop>
                                <div className="ItemTitle">이메일</div>
                                <div className="ItemContent">ljw041101@gmail.com</div>
                            </S.UesrInformationItemTop>
                            <S.UesrInformationItemBottom>
                                <div className="ItemTitle">닉네임</div>
                                <input></input>
                            </S.UesrInformationItemBottom>
                        </S.UesrInformation><br/>
                        <S.ChangePassword>
                            <S.ChangePasswordTitle><h4>비밀번호 변경</h4>&nbsp;&nbsp;&nbsp;개인정보 보호를 위해 비밀번호는 주기적으로 변경해주세요.</S.ChangePasswordTitle>
                            <br/>
                            <S.ChangePasswordItem>
                                <div className="changepassworditemin"><input placeholder="현재 비밀번호 입력" type="password"></input><RightPassword /></div>
                                <div className="errormessage">비밀번호가 일치하지 않습니다</div>
                                <div className="changepassworditemin"><input placeholder="신규 비밀번호 입력" type="password"></input></div>
                                <div className="errormessage">비밀번호가 일치하지 않습니다</div>
                                <div className="changepassworditemin"><input placeholder="신규 비밀번호 재입력" type="password"></input><RightPassword /></div>
                                <button>확인</button>
                            </S.ChangePasswordItem>
                        </S.ChangePassword>
                    </S.ItemBox>
                    <S.ItemBox>
                        <h4>자녀정보</h4><br/>
                        <S.ChildrenInformation>
                            <S.MyChildren>
                                <div className="childrenprofile">
                                    <Profile />
                                </div>
                                <div className="childreninformation">
                                    <h5>손채건</h5>
                                    1학년 1반 11번 - 공통교육과정
                                </div>
                            </S.MyChildren>
                            <S.ChildrenStatus>
                                <S.ChildrenStatusLeft>
                                    <S.ChildrenStatusItem>
                                        <div className="itemTitle">기숙사 생활</div>
                                        <S.ChildrenStatusItemMain>
                                            <div className="checkstatus">
                                                <ul>
                                                    <li>다벌점 봉사 활동 내역</li>
                                                    <li>상벌점 내역 확인</li>
                                                </ul>
                                            </div>
                                            <div className="rightimg">
                                                <S.PlusScore>1</S.PlusScore>
                                                <S.MinusScore>12</S.MinusScore>
                                            </div>
                                        </S.ChildrenStatusItemMain>
                                    </S.ChildrenStatusItem>
                                    <S.ChildrenStatusItem>
                                        <div className="itemTitle">학교 생활</div>
                                        <S.ChildrenStatusItemMain>
                                            <div className="checkstatus">
                                                <ul>
                                                    <li>외출 내역 확인</li>
                                                </ul>
                                            </div>
                                            <div className="rightimg">
                                                <Bike />
                                            </div>
                                        </S.ChildrenStatusItemMain>
                                    </S.ChildrenStatusItem>
                                    <S.ChildrenStatusItem>
                                        <div className="itemTitle">신청 상태</div>
                                        <S.ChildrenStatusItemMain>
                                            <div className="checkstatus">
                                                <ul>
                                                    <li>이번주 잔류 신청 상태</li>
                                                    <li>주말 급식 신청 여부</li>
                                                </ul>
                                            </div>
                                            <div className="rightimg">
                                                <Home />
                                                <MealGreen />
                                            </div>
                                        </S.ChildrenStatusItemMain>
                                    </S.ChildrenStatusItem>
                                    <S.ChildrenStatusItem>
                                        <div className="itemTitle">동아리</div>
                                        <S.ChildrenStatusItemMain>
                                            <div className="checkstatus">
                                                <ul>
                                                    <li>DMS</li>
                                                </ul>
                                            </div>
                                            <div className="rightimg">
                                            </div>
                                        </S.ChildrenStatusItemMain>
                                    </S.ChildrenStatusItem>
                                </S.ChildrenStatusLeft>
                                <S.ChildrenStatusRight>
                                    <div className="Title">다벌점 봉사활동 내역 확인</div>
                                    <S.Volunteer>
                                        <div className="TiTle"><h3>1차 봉사 활동</h3>2021-01-01</div>
                                        <div className="point">+15</div>
                                    </S.Volunteer>
                                </S.ChildrenStatusRight>
                            </S.ChildrenStatus>
                        </S.ChildrenInformation>
                    </S.ItemBox>
                </S.MyPageItem>
            </S.MyPageWrapper>
            <Footer />
        </S.MainWrapper>
    )
}

export default MyPage;