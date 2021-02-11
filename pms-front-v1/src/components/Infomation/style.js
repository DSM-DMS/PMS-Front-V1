import styled from "styled-components";
import { Close } from "../../assets/index";

const MainWrapper = styled.div`
  width: 100%;
  height: 1230px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
`;

const InfoMainWrapper = styled.div`
  width: 100%;
  height: 1430px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreatorsWrapper = styled.div`
  position: relative;
  top: -7%;
  margin: 0 auto;
  width: 78%;
  height: 800px;
  display: flex;
  flex-direction: row;
  //차례대로 정렬하기
  flex-wrap: wrap;
  align-content: stretch;
`;
const InfoItem = styled.div`
  margin-right: ${({ styleMargin }) => styleMargin};
  width: 250px;
  height: 300px;
  background-color: ${({ ItemBackground }) => ItemBackground};
  box-shadow: 3px 3px 3px #00000029;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    margin: 15px;
  }
`;

const InfoHeaderWrapper = styled.div`
  position: relative;
  top: -7%;
  margin: 0 auto;
  width: 78%;
  height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 5px #00000029;

  h1 {
    font-size: 26px;
    font-weight: 600;
    margin-left: 70px;
  }

  .info-search {
    margin-left: 70px;
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    width: 23%;
    height: 40px;
    border: 1px solid #c8c8c8;
  }
  .info-search span {
    width: 35%;
    padding: 10px;
    border-right: 1px solid #c8c8c8;
  }

  .info-search input {
    outline: none;
    width: 100%;
    border: none;
    padding: 10px;
  }
`;

const ItemBoxWrapper = styled.div`
  position: relative;
  top: -4%;
  //margin: 0 auto;
  width: 70%;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  align-content: baseline;
  overflow: auto;
`;

const ItemBox = styled.div`
  margin: 20px;
  width: 21.7%;
  height: 200px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 5px #00000029;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
`;

const ItemContainer = styled.div`
  width: 93%;
  height: 180px;
  margin: 4%;
  img {
    width: 100%;
    height: 100px;
  }
  h3 {
    margin: 5px 0;
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    color: #545454;
  }
  span {
    font-size: 12px;
    color: #545454;
  }
`;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: 2;
  display: ${({ modal }) => modal};
  justify-content: center;
  align-items: center;
`;

const ModalItem = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  height: 600px;
  background-color: white;
  margin: 0 auto;
  box-shadow: 0px 5px 5px #00000029;

  .close-img {
    margin: 10px;
    width: 30px;
    height: 30px;
    background-image: url(${Close});
    float: right;
  }

  .modal-container {
    width: 95%;
    height: 530px;
    border: 1px solid red;
    margin: 0 auto;
  }

  .img-slide {
    width : 50%;
    height: 300px;
    border: 1px solid red;
  }

`;

export {
  MainWrapper,
  InfoMainWrapper,
  CreatorsWrapper,
  InfoItem,
  InfoHeaderWrapper,
  ItemBoxWrapper,
  ItemBox,
  ItemContainer,
  ModalWrapper,
  ModalItem,
};
