import React from "react";
import * as S from "./style";
import BackgroundTitle from '../BackgroundTitle'
import Footer from '../footer/Footer'

function Notice(){
    return(
        <S.MainWrapper>
            <BackgroundTitle title="공지사항"></BackgroundTitle>
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
                        <diV className="title">대덕소프트웨어마이스터고 지방공무원(시설관리직) 대체인력 채용 공고 <S.NewItem>NEW</S.NewItem></diV>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">대덕SW마이스터고 행정실무원 대체인력 채용 공고 <S.NewItem>NEW</S.NewItem></div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">2020학년도 2학기 학년별 평가계획</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">2020년 여성재취업 4차산업 메이커지도사과정 모집생 교육 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">[2020 중학생 알고리즘 경진대회] 최종 수상자 발표 및 상품 수령 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">2020학년도 2학기 학사일정 변경 안내</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">2020학년도 2학기 방과후학교 및 기초학력신장반 운영계획서</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">2020학년도 2학기 교과학습 평가관련 학부모 연수</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">2020학년도 여름방학 방과후/학력신장반 만족도 조사 결과</div>
                        <div className="writer">이**</div>
                        <div className="day">2019-12-31</div>
                    </S.Item>
                    <S.Item>
                        <div className="title">2020학년도 2학기 시간표 안내</div>
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
            <Footer/>
        </S.MainWrapper>
    )
}

export default Notice;