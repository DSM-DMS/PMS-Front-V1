import React from "react";
import * as S from "./style";

const ClubDetailModal = (props) => {
  return (
    <S.ModalWrapper style={{ display: props.modal }}>
      <S.ModalItem>
        <div onClick={props.ModalClose} className="close-img"></div>
        <div className="modal-container">
          <div className="img-slide"></div>
          
        </div>
      </S.ModalItem>
    </S.ModalWrapper>
  );
};

export default ClubDetailModal;
