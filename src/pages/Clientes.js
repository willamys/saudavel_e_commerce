import React from 'react';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from './../components/footerComponent';
import { Content, Container, Input, Button, Title } from './styled';
import Services from '../components/utils/services';
import { default as UUID } from "uuid";

class ClienteManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      nome_completo: '',
      email: '',
      cpf: '',
      endereco: ''
    }
  }

  handledSubmit = (e) => {
    e.preventDefault();
    const client = {
      id: UUID.v4(),
      nome_completo: this.state.nome_completo,
      email: this.state.email,
      cpf: this.state.cpf,
      endereco: this.state.endereco
    }
    let s = new Services();
    s.createClient(client);

    this.props.history.push({
      pathname: '/clientes',
      state: { message: 'Add  Client ' + this.state.nome_completo + ' Successful' }
    });
  }

  render() {
    return <>
      <Content>
        <NavBarComponent />
        <Container>
          <form onSubmit={this.handledSubmit}>
            <Title>
              Cadastrar Cliente
            </Title>
            <Input type="text" name="nome_completo" id="nome_completo" value={this.state.nome_completo}
              placeholder="Seu Nome" onChange={e => this.setState({ nome_completo: e.target.value })} required />
            <Input type="email" name="email" id="email" value={this.state.email}
              placeholder="E-mail" onChange={e => this.setState({ email: e.target.value })} required />
            <Input type="text" name="cpf" id="cpf" value={this.state.cpf}
              placeholder="CPF" maxLength="14" onChange={e => this.setState({ cpf: e.target.value })} required />
            <Input type="text" name="endereco" id="endereco" value={this.state.endereco}
              placeholder="Endereço Completo (Rua, nº, Bairro, Cidade, CEP)" onChange={e => this.setState({ endereco: e.target.value })} required />
            <Button type="submit">Cadastrar</Button>
          </form>
        </Container>
      </Content >
      <FooterComponent />
    </>
  }
}

export default ClienteManager;