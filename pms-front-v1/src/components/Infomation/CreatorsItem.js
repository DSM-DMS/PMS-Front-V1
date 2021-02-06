import React, { useCallback, useState } from "react";
import * as S from "./style";
import { PMS } from "../../assets/index";

const creatorsList = [
  {
    id: 1,
    img: "PMS",
    name: "김정빈",
    field: "Server",
  },
  {
    id: 2,
    img: "PMS",
    name: "정지우",
    field: "Server",
  },
  {
    id: 3,
    img: "PMS",
    name: "강은빈",
    field: "Server",
  },
  {
    id: 4,
    img: "PMS",
    name: "이진우",
    field: "Server",
  },
  {
    id: 5,
    img: "PMS",
    name: "정고은",
    field: "ios",
    className: "margin-none",
  },
  {
    id: 6,
    img: "PMS",
    name: "김재원",
    field: "Server",
  },
  {
    id: 7,
    img: "PMS",
    name: "이은별",
    field: "Server",
  },
];

function CreatorsItem() {
  const [selected, setSelected] = useState(0);

  const ItemMouseOverHandler = (row) => {
    setSelected(row.id);
  };

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
              backgroundColor: creator.id === selected ? "#C8C8C8" : "white",
            }}
            onMouseOver={() => ItemMouseOverHandler(creator)}
            onMouseOut={() => ItemMouseOutHandler()}
          >
            {/* <img src="{creator.img}"></img> */}
            <span>{creator.name}</span>
            <span>{creator.field}</span>
          </S.InfoItem>
        );
      })}
    </>
  );
}

export default CreatorsItem;
