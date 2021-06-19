import React from 'react';
import * as S from './style'

function ChildrenInformation(){
    return(
        <S.MyChildren>
            <S.ChildrenProfileImage />
            <S.ChildrenInformationValue>
                <h5>손채건</h5>1학년 1반 11번 - 공통교육과정
            </S.ChildrenInformationValue>
            <S.TriangleImg />
        </S.MyChildren>
    )
}
export default ChildrenInformation;