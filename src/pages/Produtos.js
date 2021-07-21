import React from 'react';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from '../components/footerComponent';
import { Content, Container, Input, Button, Title, Label } from './styled';
import Services from '../components/utils/services';
import { default as UUID } from "uuid";

class ProdutoManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      nome: '',
      preco: '',
      marca: '',
      img: ''
    }
  }

  imageUpload = (e) => {
    this.setState({ img: e.target.files[0] });
  };

  handledSubmit = (e) => {
    e.preventDefault();
    const img_id = UUID.v4();
    getBase64(this.state.img).then(base64 => {
      localStorage[img_id] = base64;
      console.debug("file stored", base64);
    });
    const product = {
      id: UUID.v4(),
      nome: this.state.nome,
      preco: this.state.preco,
      marca: this.state.marca,
      img: img_id
    }
    let s = new Services();
    s.createProduct(product);

    this.props.history.push({
      pathname: '/produtos',
      state: { message: 'Add  Produto ' + this.state.nome + ' Successful' }
    });
  }

  render() {
    return <>
      <Content>
        <NavBarComponent />
        <Container>
          <form onSubmit={this.handledSubmit}>
            <Title>
              Cadastrar Produtos
            </Title>
            <Input type="text" name="nome" id="nome" value={this.state.nome}
              placeholder="Nome do Produto" onChange={e => this.setState({ nome: e.target.value })} required />
            <Input type="number" name="preco" id="preco" value={this.state.preco}
              placeholder="Preço" onChange={e => this.setState({ preco: e.target.value })} required />
            <Input type="text" name="marca" id="marca" value={this.state.marca}
              placeholder="Marca do Produto" onChange={e => this.setState({ marca: e.target.value })} required />
            <Label for="img">Imagem do Produto</Label>
            <img src={this.state.img} alt="" width="60px" />
            <Input type="file" name="img" id="img" accept="image/png"
              placeholder="Imagem do Produto" onChange={this.imageUpload} required />
            <Button type="submit">Cadastrar</Button>
          </form>
        </Container>
      </Content>
      <FooterComponent />
    </>
  }
}

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
};

export default ProdutoManager;