import { Cadastro } from './Pages/Cadastro';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Route path="/cadastro" component={Cadastro}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
