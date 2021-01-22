import styled from "styled-components";

const Header = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgba(1, 4, 3, 0.27);
`;

const Nav = styled.div`
  margin: 0 auto;
  width: 25%;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-right: 14%;
`;

const Link = styled.span`
  color: white;
  font-size: 16px;
`;

export { Header, Nav, Link };
