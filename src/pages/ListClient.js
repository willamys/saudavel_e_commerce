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
      clients: []
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
          <Title>
            Listar Clientes
          </Title>
          <Table>
            <thead>
              <TableTr>
                <th>Id</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Update</th>
                <th>Delete</th>
              </TableTr>
            </thead>
            <tbody>
              {
                this.state.clients.map(client =>
                  <TableTr key={client.id}>
                    <TableTd>{client.id}</TableTd>
                    <TableTd>{client.nome_completo}</TableTd>
                    <TableTd>{client.email}</TableTd>
                    <TableTd><a to={`/pessoa/details/${client.id}`}><button className="btn btn-success">Update</button></a></TableTd>
                    <TableTd><button className="btn btn-danger" onClick={() => this.deletePersonClicked(client.id)}>Delete</button></TableTd>
                  </TableTr>
                )
              }
            </tbody>
          </Table>
          <div>
            <LinkButton to="/clientes/add">ADD</LinkButton>
          </div>
        </Container>
      </Content >
      <FooterComponent />
    </>
  }
}

export default ListClient;