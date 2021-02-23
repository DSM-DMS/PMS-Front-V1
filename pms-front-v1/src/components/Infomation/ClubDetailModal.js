import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

const ClubDetailModal = (props) => {
  const TOTAL_SLIDES = 2;
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderRef = useRef(null);

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
    <S.ModalWrapper style={{ display: props.modal }}>
      <S.ModalItem id="modal">
        <S.ModalHeader>
          <div className="background-cover">
            <div onClick={props.ModalClose} className="close-img" />
            <div className="club-wrapper">
              <div className="logo"></div>
              <span>DMS</span>
            </div>
          </div>
        </S.ModalHeader>
        <div className="title-bar"></div>
        <S.InfoWrapper>
          <h3>{props.titleName}</h3>
          <span>jhgfd</span>
          <div className="club-img" ref={sliderRef}>
            <img src="/"></img>
            <img src="/"></img>
            <img src="/"></img>
            <img src="/"></img>
            <img src="/"></img>
          </div>
          <div className="button-icon">
            <button onClick={prevSlider}>이전</button>
            <button onClick={nextSlider}>다음</button>
          </div>
        </S.InfoWrapper>
      </S.ModalItem>
    </S.ModalWrapper>
  );
};

export default ClubDetailModal;
