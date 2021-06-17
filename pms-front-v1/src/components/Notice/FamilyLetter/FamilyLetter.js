import React from "react";
import * as S from "../style";
import BackgroundTitle from '../../BackgroundTitle'
import Footer from '../../footer/Footer'

function Notice(){
    return(
        <S.MainWrapper>
            <BackgroundTitle title="가정통신문"></BackgroundTitle>
            <S.MainItemWrapper>
                <S.Search>
                    <select>
                        <option>제목</option>
                        <option>제목+내용</option>
                        <option>내용</option>
                    </select>
                    <input type="text" placeholder="검색"></input>
                </S.Search>
                <S.ItemWrapper>
                    <S.ItemTitle>
                        <div className="title">제목</div>
                        <div className="writer">작성자</div>
                        <div className="day">날짜</div>
                    </S.ItemTitle>
                    <S.Item>
                        <diV className="title">등교수업(원격수업) 변경 안내 <div className="newItem">NEW</div></diV>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">청소년 도박용어 바로알기 <div className="newItem">NEW</div></div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">2020학년도 모바일데이터 지원사업 종료 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">2020학년도 현장실습학생 2학기 성적처리 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">2020학년도 2학기 기말고사 시간표 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">교육활동보호 협조 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">개인형 이동장치(전동킥보드) 교통 안전사고</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">자녀의 감정이해하기 학부모교육자료 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">1,2학년 사제동행 뮤지컬 관람 가정통신문</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">2020년 12월~2021년 1월 급식비 납부 안내문</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Page>
                        <div className="pageitem">1</div>
                        <div className="pageitem">2</div>
                        <div className="pageitem">3</div>
                        <div className="pageitem">4</div>
                        <div className="pageitem">5</div>
                    </S.Page>
                </S.ItemWrapper>
            </S.MainItemWrapper>
            <Footer />
        </S.MainWrapper>
    )
}

export default Notice;