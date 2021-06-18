import styled from "styled-components";
import {
  MainBackground,
  DMS,
  Company,
  MyPage,
  Info,
  PMS,
} from "../../assets/index";

const MainWrapper = styled.div`
  width: 100%;
  height: 1350px;
`;

const CodingImg = styled.div`
  //background-image: url(${MainBackground});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  overflow: hidden;

  .School-img {
    display: flex;
    flex-direction: row;
    > img {
      position: absolute;
      top: -155px;
      overflow: hidden;
    }
  }

  .slide-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    top: 530px;
  }

  .SchoolTitle {
    position: relative;
    top: 18%;
    width: 78%;
    margin: 0 auto;
    color: white;
  }
  p {
    margin-bottom: 20px;
    font-weight: 100;
    font-size: 25px;
  }
  .SchoolTitle p:nth-child(2) {
    font-size: 35px;
    font-weight: 700;
  }
  .bottomLine {
    width: 220px;
    height: 5px;
    background: #ffffff;
    border-radius: 5px;
  }
  .typist {
    font-size: 20px;
  }
`;

//카테고리
const CategoryWrapper = styled.div`
  position: relative;
  top: 28%;
  margin: 0 auto;
  width: 78%;
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
const Title = styled.span`
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 500;
`;

const Font14 = styled.span`
  font-size: 14px;
  margin: 0 auto;
`;

const SubTitle = styled.span`
  font-size: 18px;
`;

const ButtonItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  border-bottom: 0.5px solid white;

  .button-cover {
    border: 0.5px solid white;
    margin: -1px;
    width: 200px;
    height: 100%;
    display: flex;
    flex-direction: row;
  }

  label {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > span {
    font-size: 14px;
    font-weight: 100;
    padding: 5px;
  }
`;

const InfoList = styled.ul`
  list-style: none;

  > li {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
  cursor: pointer;
  background-color: #56ad77;
  width: 20%;
  display: flex;
  flex-direction: column;

  .club {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .club-info {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .club-img {
    margin: 0 auto;
    width: 88.5%;
    height: 120px;
    background-size: cover;
    background-image: url(${Company});
  }

  & a {
    text-decoration: none;
    color: white;
  }
`;

const CompanyInfo = styled(ClubInfo)`
  background-color: #56ad9e;

  & a {
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
  }
`;

const DMSInfo = styled.a`
  background-image: url(${DMS});
  background-size: cover;
  background-repeat: no-repeat;

  cursor: pointer;
  background-color: #56ad77;
  width: 20%;
  display: flex;
  flex-direction: column;
`;

//두번째 카테고리 시작
const StudentInfo = styled(SchoolInfo)`
  background-color: #70c0fd;

  .student-info-img {
    margin: 16px 10px 0;
    width: 400px;
    height: 147px;
    background-image: url(${MyPage});
  }
`;

const LoginButton = styled.button`
  width: 200px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 5px;
  border: none;
  outline: none;
  color: #70c0fd;
  margin-top: 25px;
`;

const TodayMeals = styled(ClubInfo)`
  background-color: #4775b2;
`;

const MealMenu = styled.div`
  border-radius: 10px;
  width: 80%;
  height: 75%;
  max-height: 75%;
  min-height: 75%;
  background: #4b6d9a 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  overflow: auto;

  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 20px;
    font-size: 18px;
  }

  & li {
    list-style: none;
    margin: 2px;
    text-align: center;
  }
`;

const MealButton = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  > div {
    width: 10px;
    height: 10px;
    border-radius: 50px;
  }
`;

const InfoWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const DeveloperInfo = styled.div`
  cursor: pointer;
  height: 50%;
  background-color: #92b5f9;
  display: flex;
  flex-direction: row;

  & a {
    text-decoration: none;
    display: flex;
  }

  & img {
    position: relative;
    bottom: -14px;
  }

  .creators-info {
    width: 30%;
    height: 80%;
    background-image: url(${PMS});
    background-size: auto;
  }
`;

const PMSInfo = styled(DeveloperInfo)`
  background-color: #2e3451;
  cursor: unset;

  .pms-img {
    margin: 6%;
    width: 16.8%;
    height: 63%;
    background-image: url(${PMS});
    background-size: auto;
  }
`;

const ClubAnimation = styled.div`
  width: 104%;
  min-height: 80px;
  display: flex;
  flex-direction: row;
  margin: 30px;
  transition: 0.7s;

  img {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    margin: 3px;
  }
`;

export {
  MainWrapper,
  CodingImg,
  CategoryWrapper,
  CategoryItem,
  CategoryItemBottom,
  Title,
  Font14,
  SubTitle,
  ButtonItem,
  InfoList,
  SchoolInfo,
  ClubInfo,
  CompanyInfo,
  DMSInfo,
  StudentInfo,
  LoginButton,
  TodayMeals,
  MealMenu,
  MealButton,
  InfoWrapper,
  DeveloperInfo,
  PMSInfo,
  ClubAnimation,
};
