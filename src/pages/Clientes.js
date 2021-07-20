import React from 'react';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from './../components/footerComponent';
import { Content } from './styled';

class ClienteManager extends React.Component {
  render() {
    return <>
      <Content>
        <NavBarComponent />
        <h1>Clientes</h1>
      </Content >
      <FooterComponent />
    </>
  }
}

export default ClienteManager;