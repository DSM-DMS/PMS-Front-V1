import React, { useEffect, useState } from "react";
import * as S from "../style";

import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import InfoHeader from "../InfoHeader";
import InfoItemBox from "../InfoItemBox";
import ClubDetailModal from "../ClubDetailModal";
import { requestJW } from "../../../utils/axios/axios";

function ClubInfo() {
  const [modal, setModal] = useState("none");
  const [club, setClub] = useState([]);
  const logo = "picture-uri";
  const title = "club-name";

  //Modal창 닫기
  const ModalClose = () => {
    setModal("none");
  };

  const getClub = async () => {
    try {
      const data = await requestJW(
        "get",
        "introduce/clubs",
        { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
        ""
      );
      console.log(data.data.clubs);
      setClub(data.data.clubs);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getClub();
  }, []);

  return (
    <>
      {/* <ClubDetailModal
        titleName="동아리 소개"
        key={clubList.id}
        modal={modal}
        ModalClose={ModalClose}
        clubName={clubList.clubName}
        explanation={clubList.explanation}
        resolution={clubList.resolution}
      /> */}

      <S.InfoMainWrapper>
        <BackgroundTitle title="" />
        <InfoHeader title="동아리 소개" placeholder="동아리를 입력해주세요" />
        <S.ItemBoxWrapper>
          {club.map((club, index) => {
            return (
              <>
                <InfoItemBox
                  key={index}
                  setModal={setModal}
                  clubImg={club[`${logo}`]}
                  title={club[`${title}`]}
                  /* explanation={club.explanation}
                  resolution={club.resolution} */
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
