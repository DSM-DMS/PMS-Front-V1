import React, { useEffect, useState } from "react";
import * as S from "../style";

import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import InfoHeader from "../InfoHeader";
import InfoItemBox from "../InfoItemBox";
import ClubDetailModal from "../ClubDetailModal";
import { requestJW } from "../../../utils/axios/axios";

function ClubInfo() {
  const [club, setClub] = useState([]);
  const [clubTitle, setClubTitle] = useState("");
  const [clubDetail, setClubDetail] = useState([]);
  const [modalBool, setModalBool] = useState(false);
  const logo = "picture-uri";
  const clubName = "club-name";

  const ModalClose = () => {
    setModalBool(false);
  };

  useEffect(() => {
    const getClub = async () => {
      try {
        const data = await requestJW(
          "get",
          "introduce/clubs",
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
        setClub(data.data.clubs);
      } catch (e) {
        console.log(e);
      }
    };

    const clubDetailAPI = async () => {
      try {
        const data = await requestJW(
          "get",
          `introduce/clubs/${clubTitle}`,
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` },
          ""
        );
        setClubDetail(data.data);
        console.log(data.data);
      } catch (e) {
        console.log(e);
      }
    };

    getClub();
    clubDetailAPI();
  }, [clubTitle]);

  const ModalControl = () => {
    setModalBool(!modalBool);
  };

  console.log(clubTitle);

  return (
    <>
      {modalBool && (
        <ClubDetailModal
          titleName="동아리 소개"
          modal={"flex"}
          ModalClose={ModalClose}
          clubName={clubDetail.title}
          explanation={clubDetail.explanation}
          img={clubDetail.uri}
        />
      )}

      <S.InfoMainWrapper>
        <BackgroundTitle title="" />
        <InfoHeader title="동아리 소개" placeholder="동아리를 입력해주세요" />
        <S.ItemBoxWrapper>
          {club.map((club, index) => {
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
