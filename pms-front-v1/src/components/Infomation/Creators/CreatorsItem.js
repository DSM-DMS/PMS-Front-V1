import React, { useState } from "react";
import * as S from "../style";
import {
  은빈,
  지우,
  정빈,
  고은,
  재원,
  진우,
  은별,
} from "../../../assets/index";

const creatorsList = [
  {
    id: 1,
    img: 정빈,
    name: "김정빈",
    field: "Server",
  },
  {
    id: 2,
    img: 지우,
    name: "정지우",
    field: "Server",
  },
  {
    id: 3,
    img: 은빈,
    name: "강은빈",
    field: "Front-End",
  },
  {
    id: 4,
    img: 진우,
    name: "이진우",
    field: "Front-End",
  },
  {
    id: 5,
    img: 고은,
    name: "정고은",
    field: "iOS PM",
  },
  {
    id: 6,
    img: 재원,
    name: "김재원",
    field: "Android",
  },
  {
    id: 7,
    img: 은별,
    name: "이은별",
    field: "Android",
  },
];

function CreatorsItem() {
  return (
    <>
      {creatorsList.map((creator) => {
        return (
          <S.InfoItem key={creator.id}>
            <img src={creator.img} alt="프로필사진"></img>
            <span>{creator.name}</span>
            <span>{creator.field}</span>
          </S.InfoItem>
        );
      })}
    </>
  );
}

export default CreatorsItem;
