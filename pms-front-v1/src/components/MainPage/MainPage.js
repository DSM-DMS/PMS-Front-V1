import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import Header from "../Header/Header";
import Category from "./Category";
import MainPageFooter from "../footer/MainPageFooter";
import { Coding, MainBackground } from "../../assets/index";
import Typist from "react-typist";

function MainPage() {
  const TOTAL_SLIDES = 1;
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderRef = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    sliderRef.current.style.transition = "all 1.5s ease-in-out";
    sliderRef.current.style.transform = `translateX(-${currentSlider}00%)`;

    let i = 0;
    setInterval(() => {
      i++;
      setVal(i);

      if (i === 2) i = 0;
    }, 7000);
  }, [currentSlider]);

  return (
    <>
      <S.MainWrapper>
        <Header />
        <S.CodingImg>
          <div
            className="School-img"
            ref={sliderRef}
            style={{ transform: `translateX(${-val * 100}vw)` }}
          >
            <img src={MainBackground} alt="슬라이드 배경"></img>
            <img src={MainBackground} alt="슬라이드 배경"></img>
            <img src={MainBackground} alt="슬라이드 배경"></img>
          </div>
          <div className="SchoolTitle" id="title-animation">
            <p className="bottomLine"></p>
            <p>대덕소프트웨어마이스터고등학교</p>
            <Typist className="typist">
              창의성과 인간미를 품은 소트프웨어 영재의 육성
            </Typist>
          </div>
          <Category style={{ margin: "50px" }} />
        </S.CodingImg>
        <MainPageFooter />
      </S.MainWrapper>
    </>
  );
}

export default MainPage;
