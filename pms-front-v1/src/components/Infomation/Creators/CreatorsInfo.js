import React from "react";
import * as S from "../style";

import Header from "../../Header/Header";
import BackgroundTitle from "../../BackgroundTitle";
import Footer from "../../footer/Footer";
import CreatorsItem from "./CreatorsItem";

function CreatorsInfo() {

  return (
    <S.MainWrapper>
      <Header />
      <BackgroundTitle title="개발자 소개" />
      <S.CreatorsWrapper>
        <CreatorsItem/>
      </S.CreatorsWrapper>
      <Footer />
    </S.MainWrapper>
  );
}

export default CreatorsInfo;
