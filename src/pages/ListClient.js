import React from 'react';
import NavBarComponent from '../components/navBarComponent';
import FooterComponent from '../components/footerComponent';
import {
  Content, Container, Input, Button, Title, LinkButton,
  Table, TableTd, TableTr
} from './styled';
import Services from '../components/utils/services';
import { default as UUID } from "uuid";

class ListClient extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      message: ''
    }
    this.refreshClients = this.refreshClients.bind(this);
  }

  componentDidMount() {
    this.refreshClients();
    console.log(this.props.state);
  }

  refreshClients() {
    let s = new Services();
    this.setState({ clients: s.listAllClients() });
  }
  render() {
    return <>
      <Content>
        <NavBarComponent />
        <Container>
          {this.state.message}
          <Title>
            Listar Clientes
          </Title>
          <Table>
            <thead>
              <TableTr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Endereço</th>
              </TableTr>
            </thead>
            <tbody>
              {
                this.state.clients.map(client =>
                  <TableTr key={client.id}>
                    <TableTd>{client.nome_completo}</TableTd>
                    <TableTd>{client.email}</TableTd>
                    <TableTd>{client.endereco}</TableTd>
                  </TableTr>
                )
              }
            </tbody>
          </Table><br />
          <LinkButton to="/clientes/add">ADD</LinkButton>
        </Container>
      </Content >
      <FooterComponent />
    </>
  }
}

export default ListClient;