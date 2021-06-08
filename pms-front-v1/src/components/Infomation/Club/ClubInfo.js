import React, { useState } from "react";
import * as S from "../style";
import {
  BackgroundTitle,
  Footer,
  InfoHeader,
  InfoItemBox,
  ClubDetailModal,
} from "../../index";
import { FetchClub, FetchClubDetail } from "../../../utils/api/user";

function ClubInfo() {
  const [clubTitle, setClubTitle] = useState("");
  const [modalBool, setModalBool] = useState(false);
  const logo = "picture-uri";
  const clubName = "club-name";

  const ModalClose = () => {
    setModalBool(false);
  };

  // 동아리 리스트 api
  const fetchClub = FetchClub();

  // 동아리 상세 api
  const fetchClubDetail = FetchClubDetail(clubTitle);

  const ModalControl = () => {
    setModalBool(!modalBool);
  };

  return (
    <>
      {modalBool && (
        <ClubDetailModal
          titleName="동아리 소개"
          modal={"flex"}
          ModalClose={ModalClose}
          clubName={fetchClubDetail?.title}
          explanation={fetchClubDetail?.explanation}
          img={fetchClubDetail?.uri}
        />
      )}

      <S.InfoMainWrapper>
        <BackgroundTitle title="" />
        <InfoHeader title="동아리 소개" placeholder="동아리를 입력해주세요" />
        <S.ItemBoxWrapper>
          {fetchClub?.clubs.map((club, index) => {
            return (
              <>
                <InfoItemBox
                  key={index}
                  setModalBool={ModalControl}
                  setClubTitle={setClubTitle}
                  clubImg={club[`${logo}`]}
                  clubName={club[`${clubName}`]}
                  explanation={club.explanation}
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
