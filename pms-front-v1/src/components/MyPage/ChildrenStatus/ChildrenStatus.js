import React from 'react';
import * as S from './style'
import {Bike, Home, MealGreen} from '../../../assets/index'
import ChildrenCurrentStatus from './ChildrenCurrentStatus/ChildrenCurrentStatus'

function ChildrenStatus(){
    return(
        <S.ChildrenStatus>
            <S.StatusItemWrapper>
                <S.ChildrenStatusItem>
                    <S.ItemTitle>기숙사 생활</S.ItemTitle>
                    <S.ItemInnerWrapper>
                        <S.CheckStatus>
                            <ul>
                                <li>다벌점 봉사 활동 내역</li>
                                <li>상벌점 내역 확인</li>
                            </ul>
                        </S.CheckStatus>
                        <S.ItemImgWrapper>
                            <S.PrizePoint />
                            <S.PenaltyPoint/>
                        </S.ItemImgWrapper>
                    </S.ItemInnerWrapper>
                </S.ChildrenStatusItem>
                <S.ChildrenStatusItem>
                    <S.ItemTitle>학교 생활</S.ItemTitle>
                        <S.ItemInnerWrapper>
                            <S.CheckStatus>
                                <ul>
                                    <li>외출 내역 확인</li>
                                </ul>
                            </S.CheckStatus>
                            <S.ItemImgWrapper>
                                <img src={Bike} alt=""></img>
                            </S.ItemImgWrapper>
                        </S.ItemInnerWrapper>
                </S.ChildrenStatusItem>
                <S.ChildrenStatusItem>
                    <S.ItemTitle>신청 상태</S.ItemTitle>
                    <S.ItemInnerWrapper>
                        <S.CheckStatus>
                            <ul>
                                <li>이번주 잔류 신청 상태</li>
                                <li>주말 급식 신청 여부</li>
                            </ul>
                        </S.CheckStatus>
                        <S.ItemImgWrapper>
                            <img src={Home} alt=""></img>
                            <img src={MealGreen} alt=""></img>
                        </S.ItemImgWrapper>
                    </S.ItemInnerWrapper>
                </S.ChildrenStatusItem>
                <S.ChildrenStatusItem>
                    <S.ItemTitle>동아리</S.ItemTitle>
                    <S.ItemInnerWrapper>
                        <S.CheckStatus>
                            <ul>
                                <li>DMS</li>
                            </ul>
                        </S.CheckStatus>
                        <S.ItemImgWrapper></S.ItemImgWrapper>
                    </S.ItemInnerWrapper>
                </S.ChildrenStatusItem>
            </S.StatusItemWrapper>
            <ChildrenCurrentStatus />
        </S.ChildrenStatus>
    )
}

export default ChildrenStatus;