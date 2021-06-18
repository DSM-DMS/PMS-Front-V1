import React from "react";
import * as S from "./style";
import BackgroundTitle from '../BackgroundTitle'
import Footer from '../footer/Footer'
import UserInformation from './UserInformation/UserInformation'
import ChangePassword from './ChangePassword/ChangePassword'
import ChildrenInformation from './ChildrenInformation/ChildrenInformation'
import ChildrenStatus from './ChildrenStatus/ChildrenStatus'

function MyPage() {
    return(
        <S.MainWrapper>
            <BackgroundTitle title="마이페이지" />
            <S.MyPageWrapper>
                <S.MyPageItem>
                    <S.ItemBox>
                        <UserInformation />
                        <ChangePassword />
                    </S.ItemBox>
                    <S.ItemBox>
                        <h4>자녀정보</h4>
                        <S.ChildrenInformation>
                            <ChildrenInformation />
                            <ChildrenStatus />
                        </S.ChildrenInformation>
                    </S.ItemBox>
                </S.MyPageItem>
            </S.MyPageWrapper>
            <Footer />
        </S.MainWrapper>
    )
}

export default MyPage;