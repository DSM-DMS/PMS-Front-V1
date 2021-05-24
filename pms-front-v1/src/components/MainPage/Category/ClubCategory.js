import React, { useEffect, useRef, useState } from "react";
import * as S from "../style";
import { 은빈, 진우, 지우, 은별, 고은 } from "../../../assets/index";
import { requestJW } from "../../../utils/axios/axios";

const clubLists = [
  { id: 1, img: 은빈 },
  { id: 2, img: 진우 },
  { id: 3, img: 지우 },
  { id: 4, img: 은별 },
  { id: 5, img: 은빈 },
  { id: 6, img: 진우 },
  { id: 7, img: 지우 },
  { id: 8, img: 은별 },
  { id: 9, img: 은빈 },
  { id: 10, img: 진우 },
  { id: 11, img: 지우 },
  { id: 12, img: 은별 },
];

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
    <S.ClubInfo style={{ overflow: "hidden" }}>
      <div className="container club">
        <S.Title>동아리 소개</S.Title>
        <div className="club-info">
          <S.Font14>대덕소프트웨어마이스터고등학교</S.Font14>
          <S.Font14>다양한 동아리를 소개합니다</S.Font14>
        </div>
        <S.ClubAnimation style={{ transform: `translateX(${-val * 83}px)` }}>
          {club.map((img, index) => (
            <img src={img[`${logo}`]} key={index} alt="동아리 로고"></img>
          ))}
        </S.ClubAnimation>
      </div>
    </S.ClubInfo>
  );
};

export default ClubCategory;
