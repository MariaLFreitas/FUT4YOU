import { Cadastro } from './Pages/Cadastro';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route path="/cadastro" component={Cadastro}></Route>
      <Route path="/login" component={Login}></Route>
    </BrowserRouter>
  );
}

export default App;
