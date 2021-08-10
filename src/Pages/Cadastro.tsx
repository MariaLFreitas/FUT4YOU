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

export function Cadastro() {
    return (
        <div id="cadastro">
            <aside>
                <img id="icon-img" src={backIcon} alt="icone para voltar a pagina anterior" />
                <img id="prim" src={bolaImg} alt=" imagem de bola" />
                <div id="pe">
                    <p id="img">É <strong>muito mais</strong> que futebol!</p>
                </div>
            </aside>
            <main>
                <div className="content">
                    <p id="cad">Cadastre-se</p>
                    <form>
                        <label htmlFor="">Nome completo</label>
                        <Input type="text" />
                        <label htmlFor="">Email</label>
                        <Input type="email" />
                        <label htmlFor="">Data de nascimento</label>
                        <Input type="text" />
                        <label htmlFor="">Senha</label>
                        <Input type="password" />
                    </form>
                    <Button type="submit">Criar cadastro</Button>
                    <ButtonGoogle>
                        <img id="icon" src={googleIcon} alt=" logo do Google" />
                        <p>Continuar com o Google</p>
                    </ButtonGoogle>
                    <p>Já tem cadastro? <a href="https://www.figma.com/file/Qdvq94Q41NuCmsRtCSpDOf/Fut4YOU?node-id=41%3A121">Faça o login</a></p>

                </div>
            </main>
        </div>

    )
}