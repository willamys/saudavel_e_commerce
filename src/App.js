import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InventarioPage from './pages/InventarioPage';
import ClienteManager from './pages/Clientes';
import ProdutoManager from './pages/Produtos';
import ListClient from './pages/ListClient';

function App() {
  return (
    <><Router>
      <Switch>
        <Route exact path="/" exact component={InventarioPage} />
        <Route exact path="/clientes" exact component={ListClient} />
        <Route exact path="/clientes/add" exact component={ClienteManager} />
        <Route exact path="/produtos" exact component={ProdutoManager} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
