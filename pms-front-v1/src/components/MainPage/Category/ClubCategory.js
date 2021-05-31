import React, { useEffect, useState } from "react";
import * as S from "../style";
import { fetcher, requestJW } from "../../../utils/axios/axios";
import { FetchClub } from "../../../utils/api/user";

const ClubCategory = () => {
  const [club, setClub] = useState([]);
  const logo = "picture-uri";
  const [val, setVal] = useState(0);
  //슬라이드

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      i++;
      setVal(i);
      if (i === 24) i = 0;
    }, 2000);
  }, []);

  //api
  const fetchClub = FetchClub();

  return (
    <S.ClubInfo style={{ overflow: "hidden" }}>
      <div className="container club">
        <S.Title>동아리 소개</S.Title>
        <div className="club-info">
          <S.Font14>대덕소프트웨어마이스터고등학교</S.Font14>
          <S.Font14>다양한 동아리를 소개합니다</S.Font14>
        </div>
        <S.ClubAnimation style={{ transform: `translateX(${-val * 83}px)` }}>
          {fetchClub?.clubs.map((img, index) => (
            <img src={img[`${logo}`]} key={index} alt="동아리 로고"></img>
          ))}
        </S.ClubAnimation>
      </div>
    </S.ClubInfo>
  );
};

export default ClubCategory;
