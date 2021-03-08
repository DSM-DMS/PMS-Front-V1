import styled from "styled-components";

const Header = styled.div`
  top: 0;
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgba(1, 4, 3, 0.27);
  z-index: 1;

  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100px;
    height: 130px;
    background-color: white;
    //background-color: rgba(1,4,3,0.5);
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
  a :hover{
    color : red;
  }
`;

const Nav = styled.ul`
  margin: 0 auto;
  width: 34%;
  height: 100%;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-right: 9%;

  a {
    text-decoration: none;
    color: white;
    font-size: 16px;
  }
`;

export { Header, Nav };
