import { Link } from "react-router-dom"
import { Button } from "reactstrap"
import CabecalhoSemLogin from '../../cabecalhos/cabecalhoSemLogin'



function cadastroAluno () {
    return<>
<CabecalhoSemLogin/>

    <div class="centralizar">
            <div>

            <h1>Olá, futuro aluno!</h1>
            <h2>Preencha seu cadastro:</h2>

                <label for="primeiroNome">Primeiro nome: </label>
                <input class="input-texto" className="nome" type="text" required autofocus/>

                <br/>
                <br/>

                <label for="ultimoNome">Último nome: </label>
                <input class="input-texto" className="nome" type="text" required autofocus/>

                <br/>
                <br/>

                <label for="email" className="email-css">E-mail: </label>
                <input class="input-texto" className="email" type="email" required/>

                <br/>
                <br/>

                <label for="serie">Série: </label>
                <select className="serie" name="serie">
                    <option value="" disabled selected hclassNameden>Selecione uma série</option>
                    <option value="6">Sexto ano</option>
                    <option value="7">Sétimo ano</option>
                    <option value="8">Oitavo ano</option>
                    <option value="9">Nono ano</option>
                    <option value="1">Primeiro ano</option>
                    <option value="2">Segundo ano</option>
                    <option value="3">Terceiro ano</option>
                </select>

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

export default cadastroAluno