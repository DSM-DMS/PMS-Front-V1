import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

const ClubDetailModal = (props) => {
  const TOTAL_SLIDES = 4;
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliderRef = useRef(null);
  const [val, setVal] = useState(0);

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
    sliderRef.current.style.transform = `translateX(-${currentSlider}0%)`;

    let i = 0;
    setInterval(() => {
      i++;
      setVal(i);

      if (i === 4) i = 0;
    }, 3000);
  }, [currentSlider]);

  return (
    <S.ModalWrapper style={{ display: props.modal }}>
      <S.ModalItem id="modal">
        <S.ModalHeader>
          <div className="background-cover">
            <div onClick={props.ModalClose} className="close-img" />
            <div className="club-wrapper">
              <img src={props.img} alt="로고" className="logo"></img>
              <span>{props.clubName}</span>
            </div>
          </div>
        </S.ModalHeader>
        <div className="title-bar"></div>
        <S.InfoWrapper>
          <h3>{props.explanation}</h3>
          <span></span>
          <div
            className="club-img"
            ref={sliderRef}
            style={{ transform: `translateX(${-val * 250}px)` }}
          >
            <img src={props.img} alt="동아리 사진"></img>
            <img src={props.img} alt="동아리 사진"></img>
            <img src={props.img} alt="동아리 사진"></img>
            <img src={props.img} alt="동아리 사진"></img>
            <img src={props.img} alt="동아리 사진"></img>
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
