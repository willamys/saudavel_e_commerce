class Services {

  createClient(client) {
    let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    clientes.push(client);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    console.log('Salva com sucesso.');
  }

  listAll() {
    let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    return clientes;
  }

  createProduct(product) {
    let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    produtos.push(product);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    console.log('Salva com sucesso.');
  }

  listAll() {
    let produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    return produtos;
  }
}

export default Services;