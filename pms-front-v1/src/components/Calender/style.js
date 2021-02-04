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
  width: 300px;
  height: 100%auto;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 5px #00000029;
`;

const Title = styled.div`
  font-size: 20px;
`;

const MiddleWrapper =styled(SideWrapper)`
    width: 750px;
`;


export { MainWrapper, CalenderWrapper, SideWrapper, Title, MiddleWrapper };
