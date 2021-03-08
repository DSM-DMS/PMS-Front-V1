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
    className: "margin-none",
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
  const [selected, setSelected] = useState(0);

  //마우스 가져다 놓을시 색 변경
  const ItemMouseOverHandler = (row) => {
    setSelected(row.id);
  };
  //마우스 아웃시 기본색
  const ItemMouseOutHandler = () => {
    setSelected(0);
  };

  return (
    <>
      {creatorsList.map((creator) => {
        //특정 인물 margin-right : 0
        const styleMargin = creator.className === "margin-none" ? "0" : "61px";
        return (
          <S.InfoItem
            key={creator.id}
            style={{
              marginRight: styleMargin,
              backgroundColor: creator.id === selected ? "#ccd8e6" : "white",
            }}
            onMouseOver={() => ItemMouseOverHandler(creator)}
            onMouseOut={() => ItemMouseOutHandler()}
          >
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
