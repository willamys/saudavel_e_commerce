import React from 'react';
import { Nav, Menu, MenuItem, MenuLink, Logo } from './styled';
import logo from './../../assets/logo.png';


class NavBar extends React.Component {

  render() {
    return <>
      <Nav>
        <Menu>
          <MenuItem>
            <MenuLink to="/"><Logo src={logo} alt="Logomarca" /></MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/clientes">Clientes</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/produtos">Produtos</MenuLink>
          </MenuItem>
        </Menu>
      </Nav>
    </>;
  }
}

export default NavBar;