import React from "react";
import * as S from "./style";

const InfoItemBox = (props) => {
  return (
    <S.ItemBox>
      <S.ItemContainer>
        <img scr="/"></img>
        <h3>{props.clubName}</h3>
				<span>{props.clubInfomation}</span>
      </S.ItemContainer>
    </S.ItemBox>
  );
};

export default InfoItemBox;
