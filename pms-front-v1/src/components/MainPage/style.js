import styled from "styled-components";
import { MainBackground, DMS } from "../../assets/index";

const MainWrapper = styled.div`
  width: 100%;
  height: 1550px;
`;

const CodingImg = styled.div`
  background-image: url(${MainBackground});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;

  .SchoolTitle {
    position: relative;
    top: 18%;
    width: 70%;
    margin: 0 auto;
    color: white;
  }
  p {
    margin: 20px;
    font-weight: 100;
    font-size: 25px;
  }
  .SchoolTitle p:nth-child(2) {
    font-size: 35px;
    font-weight: 600;
  }
  .bottomLine {
    width: 220px;
    height: 5px;
    background: #ffffff;
    border-radius: 5px;
  }
`;

//카테고리
const CategoryWrapper = styled.div`
  position: relative;
  top: 30%;
  margin: 0 auto;
  width: 70%;
  height: 575px;
`;

const CategoryItem = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: row;
`;

const CategoryItemBottom = styled(CategoryItem)`
  height: 55%;
`;

//카테고리 타이틀
const Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  //font-weight: 600;
`;

const ButtonItem = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  border-bottom: 0.5px solid white;

  .button {
    background-color: ${({ buttonColor }) => buttonColor};
    border: 1px solid white;
    > span {
      color: ${({ buttonFont }) => buttonFont};
      font-size: 14px;
      margin: 5px;
      font-weight: 100;
    }
  }
`;

const InfoList = styled.ul`
  list-style: none;

  > li {
    font-size: 16px;
    margin-top: 7px;
  }
`;

const SchoolInfo = styled.div`
  background-color: #d37c7c;
  width: 40%;
  height: 100%;
  color: white;
`;

const ClubInfo = styled(SchoolInfo)`
  background-color: #56ad77;
  width: 20%;
`;

const CompanyInfo = styled(ClubInfo)`
  background-color: #56ad9e;
`;

const DMSInfo = styled(ClubInfo)`
  background-image: url(${DMS});
  background-repeat: no-repeat;
`;

const StudentInfo = styled(SchoolInfo)`
  background-color: #70c0fd;
`;

const TodayMeals = styled(ClubInfo)`
  background-color: #4775b2;
`;

const InfoWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const DeveloperInfo = styled.div`
  height: 50%;
  background-color: #92b5f9;
`;

const PMSInfo = styled(DeveloperInfo)`
  background-color: #2e3451;
`;

export {
  MainWrapper,
  CodingImg,
  CategoryWrapper,
  CategoryItem,
  CategoryItemBottom,
  Title,
  ButtonItem,
  InfoList,
  SchoolInfo,
  ClubInfo,
  CompanyInfo,
  DMSInfo,
  StudentInfo,
  TodayMeals,
  InfoWrapper,
  DeveloperInfo,
  PMSInfo,
};
