import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 1230px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
`;

const InfoMainWrapper = styled.div`
  width: 100%;
  height: 1430px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
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
    width: 340px;
    height: 40px;
    border: 1px solid #c8c8c8;
  }
  .info-search span {
    width: 120px;
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
  margin: 0 auto;
  width: 70%;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
	align-content: baseline;
  overflow: auto;
`;

const ItemBox = styled.div`
  margin: 20px;
  width: 290px;
  height: 200px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 5px #00000029;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
`;

const ItemContainer = styled.div`
  width: 270px;
  height: 180px;
  margin: 10px;
  img {
    width: 100%;
    height: 100px;
    border: 1px solid red;
  }
  h3 {
    font-size: 16px;
    font-weight: 600;
  }
  span {
    font-size: 14px;
    color: #545454;
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
};
