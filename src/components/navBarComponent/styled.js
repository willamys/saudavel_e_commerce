import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled.img`
  display:block;
  margin-top:-7px;
  width:40px;
`;

export const Nav = styled.nav` 
  font-size: 18px;
  top: 0;
  z-index: 999;
  height:100vh;
  width:150px;
  background-color: #333;
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: flex-start;
  align-items: none;
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

export const MenuItem = styled.li`
  float: left;
`;
export const MenuLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #A71E41;
  }
  &:active {
    color: #A71E41;
`;