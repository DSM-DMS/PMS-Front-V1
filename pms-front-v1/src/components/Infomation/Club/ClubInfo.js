import React, { useState } from "react";
import * as S from "../style";

import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import InfoHeader from "../InfoHeader";
import InfoItemBox from "../InfoItemBox";
import ClubDetailModal from "../ClubDetailModal";

export const clubList = [
  {
    id: 1,
    clubImg: "/PxMS",
    clubName: "DMS",
    explanation: "기숙사 지원 시스템을 만들고 있습니다.",
    resolution: " DSM학생들의 원활한 기숙사 생활을 위하여!",
  },
  {
    id: 2,
    clubImg: "/PxMS",
    clubName: "SMS",
    explanation: "기숙사 지원 시스템을 만들고 있습니다.",
    resolution: " DSM학생들의 원활한 기숙사 생활을 위하여!",
  },
  {
    id: 3,
    clubImg: "/PxMS",
    clubName: "PMS",
    explanation: "ㅎㅇ!!.",
    resolution: " DSM학생들의 원활한 기숙사 생활을 위하여!",
  },
];

function ClubInfo() {
  const [modal, setModal] = useState("none");

  //Modal창 닫기
  const ModalClose = () => {
    setModal("none");
  };

  return (
    <>
      <ClubDetailModal
        titleName="동아리 소개"
        key={clubList.id}
        modal={modal}
        ModalClose={ModalClose}
        clubName={clubList.clubName}
        explanation={clubList.explanation}
        resolution={clubList.resolution}
      />

      <S.InfoMainWrapper>
        <BackgroundTitle title="" />
        <InfoHeader title="동아리 소개" placeholder="동아리를 입력해주세요" />
        <S.ItemBoxWrapper>
          {clubList.map((club) => {
            return (
              <>
                <InfoItemBox
                  setModal={setModal}
                  key={club.id}
                  title={club.clubName}
                  explanation={club.explanation}
                  resolution={club.resolution}
                />
              </>
            );
          })}
        </S.ItemBoxWrapper>
        <Footer />
      </S.InfoMainWrapper>
    </>
  );
}

export default ClubInfo;
