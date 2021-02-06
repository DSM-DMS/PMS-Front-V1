import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%auto;
  height: 1230px;
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

export { MainWrapper, CreatorsWrapper, InfoItem };
