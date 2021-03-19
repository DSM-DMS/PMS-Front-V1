import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { 은빈, 진우, 지우, 은별, 고은 } from "../../assets/index";

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
  const [val, setVal] = useState(0);
  //슬라이드
  const sliderRef = useRef(null);

  useEffect(() => {
    let i = 0;
      setInterval(()=>{
          i++;
          setVal(i)
          if(i === 10) i = 0;
      },1000)
  },[]);

  return (
    <S.ClubInfo style={{ overflow: "hidden" }}>
      <div className="container club">
        <S.Title>동아리 소개</S.Title>
        <div className="club-info">
          <S.Font14>대덕소프트웨어마이스터고등학교</S.Font14>
          <S.Font14>다양한 동아리를 소개합니다</S.Font14>
        </div>
        <S.ClubAnimation
            style={{transform:`translateX(${-val * 77}px)`}}
        >
          {clubLists.map((img) => (
            <img src={img.img} key={img.id} alt="동아리 로고"></img>
          ))}
        </S.ClubAnimation>
      </div>
    </S.ClubInfo>
  );
};

export default ClubCategory;
