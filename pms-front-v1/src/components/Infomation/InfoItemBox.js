import React from "react";
import * as S from "./style";

const InfoItemBox = (props) => {

  const ItemBoxClickHandler = () => {
    props.setModal("flex");
    console.log("ㅇㅇ");
  };

  return (
    <>
      <S.ItemBox onClick={ItemBoxClickHandler}>
        <S.ItemContainer>
          <img scr="{props.clubImg}"></img>
          <h3>{props.title}</h3>
          <p>{props.explanation}</p>
          <span>{props.resolution}</span>
        </S.ItemContainer>
      </S.ItemBox>
    </>
  );
};

export default InfoItemBox;
