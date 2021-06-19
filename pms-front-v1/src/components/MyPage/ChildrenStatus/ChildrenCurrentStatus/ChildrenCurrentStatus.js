import React from 'react';
import * as S from './style'

function ChildrenCurrentStatus(){
    return(
        <S.ChildrenCurrentStatus>
            <S.ChildrenCurrentStatusTitle>다벌점 봉사활동 내역 확인</S.ChildrenCurrentStatusTitle>
            <S.StatusValue>
                <S.StatusValueTitle><h3>1차 봉사 활동</h3>2021-01-01</S.StatusValueTitle>
                <S.Point>+15</S.Point>
            </S.StatusValue>
        </S.ChildrenCurrentStatus>
    )
}

export default ChildrenCurrentStatus;