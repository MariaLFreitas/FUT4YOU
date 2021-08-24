//imagem
import fotocampo from '../assets/images/fotohome.jpg';
import iconepessoa from '../assets/images/people.svg';

//componentes
import { Button } from '../Components/Button';

//style da home
import '../styles/home.css';

export function Home(){
    return(
        <div id="home">
            <header>
                <p id="logo">FUT4YOU</p>
                <span className="navbartext">Meu time</span>
                <span className="navbartext">Calendário de jogos</span>
                <span className="navbartext">Comunidade</span>
                { <img id="icone" src={iconepessoa} alt="usuario" /> }
            </header>
            <main>
                  <img id="imageFotoHome" src={fotocampo} alt=" imagem de bola no campo" /> 
                               
                <div id="titulo">
                    <span>VOCÊ COMEÇA O JOGO!</span>
                
                </div>
                <div id="subtitulo">
                    <p>Venha fazer parte da maior comunidade de jogos de futebol do Brasil!</p>
                </div>
                <Button id="botaohome" type="submit">Começar agora</Button>
            </main>
        </div>
    )
} 