import React from 'react';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from '../components/footerComponent';
import { Content } from './styled';

class ProdutoManager extends React.Component {
  render() {
    return <>
      <Content>
        <NavBarComponent />
        <h1>Produtos</h1>
      </Content>
      <FooterComponent />
    </>
  }
}

export default ProdutoManager;