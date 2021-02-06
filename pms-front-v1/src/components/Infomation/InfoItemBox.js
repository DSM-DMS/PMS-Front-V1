import React from "react";
import * as S from "./style";

const InfoItemBox = (props) => {
  return (
    <S.ItemBox>
      <S.ItemContainer>
        <img scr="{props.clubImg}"></img>
        <h3>{props.title}</h3>
				<p>{props.explanation}</p>
				<span>{props.resolution}</span>
      </S.ItemContainer>
    </S.ItemBox>
  );
};

export default InfoItemBox;
