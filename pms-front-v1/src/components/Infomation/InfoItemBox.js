import React from "react";
import * as S from "./style";

const InfoItemBox = (props) => {
  //모달 클릭시 나타나게 해줌
  const ItemBoxClickHandler = () => {
    props.setModalBool();
    props.setClubTitle(props.clubName);
  };

  return (
    <>
      <S.ItemBox onClick={(e) => ItemBoxClickHandler(e)}>
        <S.ItemContainer>
          <img src={props.clubImg} alt="로고"></img>
          <h3>{props.clubName}</h3>
          <p>{props.explanation}</p>
          <span>{props.resolution}</span>
        </S.ItemContainer>
      </S.ItemBox>
    </>
  );
};

export default InfoItemBox;
