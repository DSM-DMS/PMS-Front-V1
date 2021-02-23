import React, { useState } from "react";
import * as S from "../style";

import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import InfoHeader from "../InfoHeader";
import InfoItemBox from "../InfoItemBox";
import ClubDetailModal from "../ClubDetailModal";

function CompanyInfo() {
  const companyList = [
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    {
      id : 1,
      companyName: "NAVER",
      explanation: "검색광고 공식대행사 전문 채용관",
      resolution: "창의적인 도전을 멈추지 않는 인재를 채용합니다.",
    },
    
  ];
  const [modal, setModal] = useState("none");

  //Modal창 닫기
  const ModalClose = () => {
    setModal("none");
  };

  return (
    <>
      <ClubDetailModal modal={modal} ModalClose={ModalClose} />
      <S.InfoMainWrapper>
        <BackgroundTitle title="" />
        <InfoHeader title="취업처 소개" placeholder="취업처를 입력해주세요" />
        <S.ItemBoxWrapper>
          {companyList.map((club) => {
            return (
              <InfoItemBox
                setModal={setModal}
                key={club.id}
                title={club.companyName}
                explanation={club.explanation}
                resolution={club.resolution}
              />
            );
          })}
        </S.ItemBoxWrapper>
        <Footer />
      </S.InfoMainWrapper>
    </>
  );
}

export default CompanyInfo;
