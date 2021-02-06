import React from "react";
import * as S from "../style";

import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import InfoHeader from "../InfoHeader";
import InfoItemBox from "../InfoItemBox";

function ClubInfo() {
  const clubList = [
    {
      clubName: "DMS",
      clubInfomation:
        "기숙사 지원 시스템을 만들고 있습니다. DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubName: "DMS",
      clubInfomation:
        "기숙사 지원 시스템을 만들고 있습니다. DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubName: "DMS",
      clubInfomation:
        "기숙사 지원 시스템을 만들고 있습니다. DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubName: "DMS",
      clubInfomation:
        "기숙사 지원 시스템을 만들고 있습니다. DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubName: "DMS",
      clubInfomation:
        "기숙사 지원 시스템을 만들고 있습니다. DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubName: "DMS",
      clubInfomation:
        "기숙사 지원 시스템을 만들고 있습니다. DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		

  ];
  return (
    <S.InfoMainWrapper>
      <BackgroundTitle title="" />
      <InfoHeader title="동아리 소개" placeholder="동아리를 입력해주세요" />
      <S.ItemBoxWrapper>
        {clubList.map((club) => {
          return (
            <InfoItemBox
              clubName={club.clubName}
              clubInfomation={club.clubInfomation}
            />
          );
        })}
      </S.ItemBoxWrapper>
      <Footer />
    </S.InfoMainWrapper>
  );
}

export default ClubInfo;
