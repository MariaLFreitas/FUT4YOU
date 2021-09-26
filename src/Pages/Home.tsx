//imagem
import fotocampo from '../assets/images/fute.svg';
import iconepessoa from '../assets/images/people.svg';

//componentes
import { Button } from '../Components/Button';

//style da home
import '../styles/home.css';
import { useHistory } from 'react-router-dom';

export function Home() {

    const history = useHistory();

    return (
        <div id="home">
            <img id="imagemFotoHome" src={fotocampo} alt=" imagem de bola no campo" />
            <header>
                <p id="logo">FUT4YOU</p>
                <span className="navbartext">Meu time</span>
                <span className="navbartext">Calendário de jogos</span>
                <span className="navbartext">Comunidade</span>
                <img id="icone" onClick={() => history.push('/cadastro')} src={iconepessoa} alt="usuario" />
            </header>
            <div className="separator">
            </div>
            <main>


                <div id="titulo">
                    <span>VOCÊ COMEÇA O JOGO!</span>

                </div>
                <div id="subtitulo">
                    <p>Venha fazer parte da maior comunidade de jogos de futebol do Brasil!</p>
                </div>
                <Button id="botaohome" onClick={() => history.push('/cadastro')}>Começar agora</Button>
            </main>
        </div>
    )
}