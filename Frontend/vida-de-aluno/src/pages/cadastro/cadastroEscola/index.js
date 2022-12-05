import { Link } from "react-router-dom"
import { Button } from "reactstrap"
import './style.scss'



function cadastroEscola () {
    return<>
    <div class="centralizar">
            <div>

            <h1>Olá!</h1>
            <h2>Preencha seu cadastro:</h2>

                <label for="escola">Nome da escola: </label>
                <input class="input-texto" className="nome" type="text" required autofocus/>

                <br/>
                <br/>

                <label for="resumo">Fale um pouco sobre vocês: </label>
                <br/>
                <br/>
                <textarea className="resumo" type="text"/>

                <br/>
                <br/>

                <label for="mail" className="email-css">E-mail: </label>
                <input class="input-texto" className="email" type="email" required/>

                <br/>
                <br/>


                 <label for="senha">Senha: </label>
                <input class="input-texto" className="senha" type="password" required/>

                <br/>
                <br/>
           
                 <label for="telefone">Telefone: </label>
                <input class="input-texto" className="telefone" type="tel"  required/>

                <br/>
                <br/>



            <a href="../pages/tela-monitor-cadastro-materia.html"></a> 
            <Link to='/'><Button>Salvar</Button></Link>
            <Link to='/'><Button>Voltar</Button></Link>
            </div>

           
        </div>
    </>
}

export default cadastroEscola