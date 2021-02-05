import styled from "styled-components";
import { MainBackground } from "../assets/index";

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${MainBackground});
  background-size: auto;
  overflow:auto;
`;

const TitleWrapper = styled.div`
  position: relative;
  top: 36%;
  width: 78%;
  margin: 0 auto;
  color: white;
`;

const TopLine = styled.div`
  display: ${({ title }) => title};
  width: 220px;
  height: 5px;
  background: #ffffff;
  border-radius: 5px;
`;

const Title = styled.p`
display: ${({ title }) => title};
  margin: 20px 0;
  font-size: 35px;
  font-weight: 700;
`;

export { BackgroundWrapper, TitleWrapper, TopLine, Title };
