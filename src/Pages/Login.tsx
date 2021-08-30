//Imagens
import bolaImg from '../assets/images/bola.png';
import googleIcon from '../assets/images/iconGoogle.svg';
import backIcon from '../assets/images/back.svg';

//Componentes
import { Button } from '../Components/Button';
import { ButtonGoogle } from '../Components/ButtonGoogle';
import { Input } from '../Components/Input';

// Outros
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../App';

// Style do cadastro
import '../styles/login.css';
import { useState } from 'react';

export function Login() {
    const { login } = useContext(userContext);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const history = useHistory();


    async function loginWithEmailAndPassword() {

        try {
            await login(email, pass);

        } catch (error) {
            alert('Email ou senha incorreto');

        }
        
        history.push('/times');
    }
    return (
        <div id="cadastro">
            <aside>
            <button className="buttonBack" onClick={()=>history.push('/')}>
                    <img id="icon" src={backIcon} alt="icone para voltar a pagina anterior" />
                </button>
                <img id="prim" src={bolaImg} alt=" imagem de bola" />
                <div id="pe">
                    <p id="img">É <strong>muito mais</strong> que futebol!</p>
                </div>
            </aside>
            <main>
                <div className="content">
                    <div className="content_titulo">

                        <p id="cad">Login</p>
                        <p id="tit">Olá, é ótimo ter você de volta! :)</p>
                    </div>
                    <form>
                        <label htmlFor="">Email</label>
                        <Input type="email" onChange={event => setEmail(event.target.value)} value={email} />
                        <label htmlFor="">Senha</label>
                        <Input type="password" onChange={event => setPass(event.target.value)} value={pass} />
                    </form>
                    <Button onClick={loginWithEmailAndPassword} type="submit">Entrar</Button>
                    <ButtonGoogle>
                        <img id="icon" src={googleIcon} alt=" logo do Google" />
                        <p>Continuar com o Google</p>
                    </ButtonGoogle>
                    <p>É novo por aqui? <Link to='/cadastro'>Faça seu cadastro</Link></p>

                </div>
            </main>
        </div>

    )
}