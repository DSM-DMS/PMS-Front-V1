import React from "react";
import * as S from "../style";
import BackgroundTitle from '../../BackgroundTitle'
import Footer from '../../footer/Footer'
import {ReactComponent as Profile} from '../../../assets/Prifile.svg'

function NoticeWritten(){
    return(
        <S.MainWrittenWrapper>
            <BackgroundTitle title="공지사항"></BackgroundTitle>
            <S.MainWrittenItemWrapper>
                <h3>대덕소프트웨어마이스터고등학교 지방공무원(시설관리직) 대체인력 채용</h3>
                <S.WrittenInfo>
                    <div className="infotype">공지사항</div>
                    <div className="infotitle">작성자</div>&nbsp;&nbsp; 이**
                    <div className="infotitle">작성일</div>&nbsp;&nbsp; 2020-01-01
                </S.WrittenInfo>
                <S.WrittenItem>
                    보고, 이 가득 옥 헤는 봅니다. 별들을 쉬이 다 당신은 겨울이 것은 까닭입니다. 시인의 옥 그리워 지나가는 된 있습니다. 이름을 나의 별에도 마리아 별들을 어 머니, 된 있습니다. 소학교 아직 하나에 언덕 가을로 걱정도 하나에 별이 파란 봅니다. 사랑과 내일 쉬이 까닭입니다. 것은 차 나는 위에 무덤 하나에 봄이 이름 과, 까닭입니다. 별이 오면 패, 무성할 남은 별 거외다. 묻힌 아스라히 했던 까닭입니다. 그러나 이런 잔디가 이 하나에 멀듯이, 별 이름과, 이름과, 있습니다. 북간도에 이름과, 별에도 하늘에는 노루, 강아지, 쓸쓸함과 속의 오는 계십니다. 하나에 오는 하나의 있습니다. 이 덮어 노새, 아이들의 속의 버리었습니다. 애기 이 이름을 청춘이 있습니다. 가을 노새, 내일 하나에 계십니다. 마디씩 패, 이 름자를 다 하나에 새워 비둘기, 봅니다. 이국 쓸쓸함과 별빛이 별 까닭입니다. 것은 지나가는 이국 나는 이름자 이제 계집애들의 하나에 봅니다. 슬퍼하는 나 는 하나에 당신은 멀듯이, 봅니다. 나는 흙으로 어머님, 별을 아이들의 피어나듯이 버리었습니다. 풀이 이름을 이웃 어머님, 별빛이 아름다운 아이들의 까닭이 요, 까닭입니다. 남은 덮어 이네들은 시와 애기 된 하나에 때 봅니다.
                </S.WrittenItem>
                <div className="addFile">
                    <div className="filetitle">첨부파일</div>
                    <div className="fileitem">2021지방공무원(시설관리직) 대체인력채용공고문(공개).hwp</div>
                </div>
                <S.CommentWrapper>
                    <div className="commentTitle"><h3>댓글</h3>&nbsp;<div className="commentAmount">2개</div></div>
                    <S.CommentContent>
                        <input placeholder="댓글을 입력하려면 로그인하세요." readOnly/>
                        <div className="commentItemWrapper">
                            <div className="commentItem">
                                <div className="profileimage"><Profile /></div>
                                <div className="comment">
                                    <div className="title">이명호</div>
                                    <div className="content"><h4>@서인석 선생님</h4>&nbsp;거친 내려온 불어 뛰노는 무엇을 어디 때문이다.</div>
                                </div>
                            </div>
                            <div className="commentItem">
                                <div className="profileimage"><Profile /></div>
                                <div className="comment">
                                    <div className="title">이재원</div>
                                    <div className="content"><h4>@안희명 교장선생님</h4>&nbsp;일월과 품으며, 청춘 동력은 싶이 밥을 무엇이 인간의 있다.</div>
                                </div>
                            </div>
                        </div>
                    </S.CommentContent>
                </S.CommentWrapper>
            </S.MainWrittenItemWrapper>
            <S.BottomItemWrapper>
                 <S.ItemWrapper>
                     <S.ItemW>
                         <diV className="title">등교수업(원격수업) 변경 안내 <div className="newItem">NEW</div></diV>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                     </S.ItemW>
                     <S.ItemW>
                        <div className="title">청소년 도박용어 바로알기 <div className ="newItem">NEW</div></div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.ItemW>
                    <S.ItemW>
                        <div className="title">2020학년도 모바일데이터 지원사업 종료 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.ItemW>
                    <S.ItemW>
                        <div className="title">2020학년도 현장실습학생 2학기 성적처리 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.ItemW>
                    <S.ItemW>
                        <div className="title">2020학년도 2학기 기말고사 시간표 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.ItemW>
                    <S.ItemW>
                        <div className="title">교육활동보호 협조 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.ItemW>
                    <S.ItemW>
                        <div className="title">개인형 이동장치(전동킥보드) 교통 안전사고</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.ItemW>
                    <S.ItemW>
                        <div className="title">자녀의 감정이해하기 학부모교육자료 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.ItemW>
                    <S.ItemW>
                        <div className="title">1,2학년 사제동행 뮤지컬 관람 가정통신문</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.ItemW>
                    <S.ItemW>
                        <div className="title">2020년 12월~2021년 1월 급식비 납부 안내문</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.ItemW>
                 </S.ItemWrapper>
                 <S.PageW>
                        <div className="pageitem">1</div>
                        <div className="pageitem">2</div>
                        <div className="pageitem">3</div>
                        <div className="pageitem">4</div>
                        <div className="pageitem">5</div>
                    </S.PageW>
            </S.BottomItemWrapper>
            <Footer />
        </S.MainWrittenWrapper>
    )
}

export default NoticeWritten;