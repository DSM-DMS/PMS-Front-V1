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
  const [fixed, setFixed] = useState("fixed");

  const nextSlider = () => {
    //더이상 넘어갈 슬라이드가 없으면 초기화
    if (currentSlider >= TOTAL_SLIDES) {
      setCurrentSlider(0);
    } else {
      setCurrentSlider(currentSlider + 1);
    }
  };

  const prevSlider = () => {
    if (currentSlider === 0) {
      setCurrentSlider(TOTAL_SLIDES);
    } else {
      setCurrentSlider(currentSlider - 1);
    }
  };

  useEffect(() => {
    sliderRef.current.style.transition = "all 0.5s ease-in-out";
    sliderRef.current.style.transform = `translateX(-${currentSlider}00%)`;
  }, [currentSlider]);

  return (
    <S.MainWrapper>
      <Header />
      <S.CodingImg>
        <div className="School-img" ref={sliderRef}>
          <img src={MainBackground}></img>
          {/* <img src={Coding}></img> */}
          <img src={MainBackground}></img>
        </div>
        <div className="slide-button">
          <button onClick={prevSlider}> 이전</button>
          <button onClick={nextSlider}> 다음</button>
        </div>
        <div className="SchoolTitle" id="title-animation">
          <p className="bottomLine"></p>
          <p>대덕소프트웨어마이스터고등학교</p>
          <Typist className="typist">
            창의성과 인간미를 품은 소트프웨어 영재의 육성
          </Typist>
        </div>
        <Category style={{margin : "50px"}} />
      </S.CodingImg>
      <MainPageFooter />
    </S.MainWrapper>
  );
}

export default MainPage;
