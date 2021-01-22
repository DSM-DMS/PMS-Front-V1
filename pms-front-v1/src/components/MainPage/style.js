import styled from "styled-components";
import { MainBackground, DMS } from "../../assets/index";

const MainWrapper = styled.div`
  width: 100%;
  height: 1550px;
`;

const CodingImg = styled.div`
  background-image: url(${MainBackground});
  //background-size: 100%;
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
    margin: 10px;
  }
  .SchoolTitle p:first-child {
    font-size: 35px;
    font-weight: 600;
  }
`;

//카테고리
const CategoryWrapper = styled.div`
  position: relative;
  top: 30%;
  margin: 0 auto;
  width: 70%;
  height: 600px;
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

const Title = styled.div``;

const ButtonItem = styled.div``;

const InfoList = styled.div``;

const SchoolInfo = styled.div`
  background-color: #d37c7c;
  width: 40%;
  height: 100%;
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

const TodayMeals = styled.div``;

const InfoWrapper  = styled.div``;

const DeveloperInfo = styled.div``;

const PMSInfo = styled.div``;


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
