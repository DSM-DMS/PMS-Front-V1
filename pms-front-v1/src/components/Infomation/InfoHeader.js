import React from "react";
import * as S from "./style";

const InfoHeader = (props) => {
  return (
    <S.InfoHeaderWrapper>
      <h1>{props.title}</h1>
      <div className="info-search">
        <span>이름</span>
        <input type="text" placeholder={props.placeholder} />
      </div>
    </S.InfoHeaderWrapper>
  );
};

export default InfoHeader;
