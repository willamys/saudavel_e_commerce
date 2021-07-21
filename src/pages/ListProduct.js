import React from 'react';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from '../components/footerComponent';
import {
  Content, Container, Input, Button, Title, LinkButton,
  Table, TableTd, TableTr
} from './styled';
import Services from '../components/utils/services';
import { default as UUID } from "uuid";
import img_t from './../assets/logo.png';


class ListProduct extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      message: ''
    }
    this.refreshProducts = this.refreshProducts.bind(this);
  }

  componentDidMount() {
    this.refreshProducts();
    console.log(this.props.state);
  }

  openImage = (e) => {
    let image = new Image();
    image.src = e.target.src;
    image.width = 200;
    let w = window.open("", '_blank');
    w.document.write(image.outerHTML);
    w.document.close();
  }

  refreshProducts() {
    let s = new Services();
    this.setState({ products: s.listAllProducts() });
  }
  render() {
    return <>
      <Content>
        <NavBarComponent />
        <Container>
          {this.state.message}
          <Title>
            Listar Produtos
          </Title>
          <Table>
            <thead>
              <TableTr>
                <th>Id</th>
                <th>Nome</th>
                <th>Preco</th>
                <th>Marca</th>
                <th>Imagem</th>
              </TableTr>
            </thead>
            <tbody>
              {
                this.state.products.map(product =>
                  <TableTr key={product.id}>
                    <TableTd>{product.id}</TableTd>
                    <TableTd>{product.nome}</TableTd>
                    <TableTd>{product.preco}</TableTd>
                    <TableTd>{product.marca}</TableTd>
                    <TableTd>
                      <img src={localStorage.getItem(product.img)}
                        alt="Não carregou :(, Atualiza." width="60px"
                        onClick={this.openImage} title="Clique para aumentar" />
                    </TableTd>
                  </TableTr>
                )
              }
            </tbody>
          </Table><br />
          <LinkButton to="/produtos/add">ADD</LinkButton>
        </Container>
      </Content >
      <FooterComponent />
    </>
  }
}

export default ListProduct;