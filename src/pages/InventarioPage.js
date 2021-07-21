import React from 'react';
import { Content, Container } from './styled';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from './../components/footerComponent';
import logo from './../assets/logo.png';

class InventarioPage extends React.Component {

  render() {
    return <>
      <Content>
        <NavBarComponent />
        <Container>
          <img src={logo} alt="" width="100px" />
          <h1>Bem vindo, ao Inventário do +Saudável. </h1>
          <p>Acesse ao menu lateral para realizar os cadastros de produtos e clientes.</p>
        </Container>
      </Content>
      <FooterComponent />
    </>;
  }
}

export default InventarioPage;