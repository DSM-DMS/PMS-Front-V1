import React from 'react';
import * as S from './style'
import {RightPassword, WrongPassword} from '../../../assets/index'

function ChangePassword(){
    return(
        <S.ChangePassword>
            <S.ChangePasswordTitle><h4>비밀번호 변경</h4>개인정보 보호를 위해 비밀번호는 주기적으로 변경해주세요.</S.ChangePasswordTitle>
            <br/>
            <S.ChangePasswordWrapper>
                <S.ChangePasswordItemBox>
                    <S.ChangePasswordInput  placeholder="현재 비밀번호 입력" type="password"/><img src={RightPassword} alt=""></img>
                </S.ChangePasswordItemBox>
                <S.ErrorMessage>비밀번호가 일치하지 않습니다</S.ErrorMessage>
                <S.ChangePasswordItemBox><S.ChangePasswordInput placeholder="신규 비밀번호 입력" type="password"/></S.ChangePasswordItemBox>
                <S.ChangePasswordItemBox>
                    <S.ChangePasswordInput placeholder="신규 비밀번호 재입력" type="password"/><img src={WrongPassword} alt=""></img>
                </S.ChangePasswordItemBox>
                <S.ErrorMessage>비밀번호가 일치하지 않습니다</S.ErrorMessage>
                <S.ChangePasswordBtn>확인</S.ChangePasswordBtn>
            </S.ChangePasswordWrapper>
        </S.ChangePassword>
    );
}

export default ChangePassword;