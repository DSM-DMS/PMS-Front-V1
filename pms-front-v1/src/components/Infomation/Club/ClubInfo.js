import React from "react";
import * as S from "../style";

import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import InfoHeader from "../InfoHeader";
import InfoItemBox from "../InfoItemBox";

function ClubInfo() {
  const clubList = [
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
    },
		{
      clubImg: "/PMS",
      title: "DMS",
      explanation: "기숙사 지원 시스템을 만들고 있습니다.",
			resolution : " DSM학생들의 원활한 기숙사 생활을 위하여!",
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
              title={club.title}
              explanation={club.explanation}
							resolution={club.resolution}
            />
          );
        })}
      </S.ItemBoxWrapper>
      <Footer />
    </S.InfoMainWrapper>
  );
}

export default ClubInfo;
