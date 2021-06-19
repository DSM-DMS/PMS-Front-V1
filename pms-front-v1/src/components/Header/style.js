import styled from "styled-components";

const Header = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgba(1, 4, 3, 0.27);
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .logo {
    margin: 5px;
    padding-left: 10.5%;
    & img {
      width: 50px;
    }
  }

  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100px;
    height: 130px;
    background-color: white;
    z-index: 2;
    position: absolute;
    top: 60px;
    right: 443px;
    box-shadow: 0px 5px 5px #00000029;

    > li {
      list-style: none;
    }
  }
  a {
    text-decoration: none;
    color: black;
  }

  .link {
    text-decoration: none;
    color: white;
  }
  a :hover {
    color: red;
  }
`;

const PMSLogo = styled.div``;

const Nav = styled.ul`
  width: 34%;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding-right: 9%;

  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
  }
`;

export { Header, Nav, PMSLogo };
