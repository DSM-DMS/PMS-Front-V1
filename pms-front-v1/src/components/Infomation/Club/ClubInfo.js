import React, { useState } from "react";
import * as S from "../style";

import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import InfoHeader from "../InfoHeader";
import InfoItemBox from "../InfoItemBox";
import ClubDetailModal from "../ClubDetailModal";

function ClubInfo() {

  const clubList = [
    {
      id: 1,
      clubImg: "/PxMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
      resolution: " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
  ];

  const [modal, setModal] = useState("none");

  //Modal창 닫기 
  const ModalClose = () => {
    setModal("none");
  }

  return (
    <>
      <ClubDetailModal modal={modal} ModalClose={ModalClose}/>
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
                  title={club.title}
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
