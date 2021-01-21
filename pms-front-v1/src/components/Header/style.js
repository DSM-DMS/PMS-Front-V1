import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid red;
  opacity: 0.27;
  background: #000000 0% 0% no-repeat padding-box;
`;

const Nav = styled.div`
  width: 500px;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-right: 5%;
`;

const Link = styled.span`
  color: white;
  font-size: 16px;
`;

export { Header, Nav, Link };
