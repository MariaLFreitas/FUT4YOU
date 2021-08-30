//Imagens
import bolaImg from '../assets/images/bola.png';
import googleIcon from '../assets/images/iconGoogle.svg';
import backIcon from '../assets/images/back.svg';

//Componentes
import { Button } from '../Components/Button';
import { ButtonGoogle } from '../Components/ButtonGoogle';
import { Input } from '../Components/Input';

// Style do cadastro
import '../styles/cadastro.css';

//Outros
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, database } from '../Services/firebase';
import { userContext } from '../App';
import { useState } from 'react';



export function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [dnasc, setDnasc] = useState('');
    const history = useHistory();
    const { user, loginGoogle } = useContext(userContext);

    async function cadGoogle() {
        if (!user) {
            await loginGoogle()
        }
        history.push('/times');
    }

    async function cad() {
        try {
            if (nome.length < 1 || email.length < 1 || dnasc.length < 1 || pass.length < 1) {
                throw new Error('Erro');
            }
            const data = { nome, email, dnasc, pass }
            await database.ref().child('usuarios').push(data);
            await auth.createUserWithEmailAndPassword(email, pass);
            await auth.signInWithEmailAndPassword(email, pass);
            history.push('/login');

        } catch (error) {
            alert('Preencha todos os dados');
        }
        //console.log(data);
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
                    <p id="cad">Cadastre-se</p>
                    <form >
                        <label htmlFor="">Nome completo</label>
                        <Input type="text" onChange={event => setNome(event.target.value)} value={nome} />
                        <label htmlFor="">Email</label>
                        <Input type="email" onChange={event => setEmail(event.target.value)} value={email} />
                        <label htmlFor="">Data de nascimento</label>
                        <Input type="date" onChange={event => setDnasc(event.target.value)} value={dnasc} />
                        <label htmlFor="">Senha</label>
                        <Input type="password" onChange={event => setPass(event.target.value)} value={pass} />
                    </form>
                    <Button onClick={cad} type="submit">Criar cadastro</Button>
                    <ButtonGoogle onClick={cadGoogle}>
                        <img id="icon" src={googleIcon} alt=" logo do Google" />
                        <p>Continuar com o Google</p>
                    </ButtonGoogle>
                    <p>Já tem cadastro? <Link to='/login' >Faça o login</Link></p>

                </div>
            </main>
        </div >

    )
}