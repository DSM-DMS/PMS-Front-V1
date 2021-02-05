import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
  height: 1230px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
`;

const CalenderWrapper = styled.div`
  position: relative;
  top: -7%;
  margin: 0 auto;
  width: 78%;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 21%;
  height: 100%auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 5px #00000029;
`;

const Title = styled.div`
  margin: 25px;
  font-size: 20px;
  font-weight: 600;
`;

const MiddleWrapper = styled(SideWrapper)`
  width: 53%;
`;

//리스트들 묶음 스크롤 기능 있음
const ListWrapper = styled.div`
  margin-bottom: 20px;
  height: 100%auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const Event = styled.div`
  margin: 15px;
  width: 80%;
  height: 60px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const EventName = styled.div`
  margin: 10px 20px;
  width: 44%;
  display: flex;
  flex-direction: row;
  align-items: center;

  .circle {
    width: 16px;
    height: 16px;
    background-color: ${({ EventColor }) => EventColor};
    border-radius: 50px;
  }
  span {
    margin-left: 10px;
    font-size: 14px;
    //font-weight: 600;
  }
`;

const EventDate = styled.div`
  height: 48px;
  font: normal normal normal 14px/14px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #7d7d7d;
  display: flex;
  align-items: center;
  span {
    margin: 16px;
  }
`;

//오늘의 급식
const SelectData = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: 15px;
`;

const MealsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;
  width: 80%;
  height: 280px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
  border-radius: 30px;
  overflow: auto;
  span {
    margin: 3px;
    font-size: 18px;
  }
`;

const Nav = styled.div`
  margin-bottom: 10px;
  width: 80%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const MealButton = styled.button`
  width: 53px;
  height: 28px;
  background-color: ${({ mealButtonColor }) => mealButtonColor};
  color: ${({ mealButtonFontColor }) => mealButtonFontColor};
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 16px;
`;

const CalenderMain = styled.div`
margin: 15px;
  width : 700px;
  height : 630px;
  border: 1px solid red;
`;

export {
  MainWrapper,
  CalenderWrapper,
  SideWrapper,
  Title,
  MiddleWrapper,
  ListWrapper,
  Event,
  EventName,
  EventDate,
  SelectData,
  MealsList,
  Nav,
  MealButton,
  CalenderMain,
};
