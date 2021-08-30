import { Cadastro } from './Pages/Cadastro';
import { BrowserRouter, Route} from 'react-router-dom';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { Times } from './Pages/Times';
import { createContext } from 'react';
import { useState } from 'react';
import firebase from 'firebase';
import { auth } from './Services/firebase';


type user = {
  id: string;
  name: string;
}
type userContextType = {
  user: user | undefined;
  login: (email: string, pass: string) => Promise<void>;
  loginGoogle: () => Promise<void>;
}


export const userContext = createContext({} as userContextType);
function App() {
  const [user, setUser] = useState<user>();

  async function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { displayName, uid } = result.user
      if (!displayName) {
        throw new Error('Missing information from Google account.');
      }

      setUser({
        id: uid,
        name: displayName,

      })
    }

  }
  async function login(email: string, pass: string) {

    const result = await auth.signInWithEmailAndPassword(email, pass);
    const { uid, displayName } = result.user as firebase.User;
    setUser({
      id: uid,
      name: displayName ?? email,

    }

    )
  }

  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}></Route>
      <userContext.Provider value={{ user, loginGoogle, login }}>
        <Route path="/cadastro" component={Cadastro}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/times" component={Times}></Route>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
