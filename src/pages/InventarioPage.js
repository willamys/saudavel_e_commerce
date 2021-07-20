import React from 'react';
import { Content } from './styled';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from './../components/footerComponent';

class InventarioPage extends React.Component {

  render() {
    return <>
      <Content>
        <NavBarComponent />
        <h1>Home</h1>
      </Content>
      <FooterComponent />
    </>;
  }
}

export default InventarioPage;