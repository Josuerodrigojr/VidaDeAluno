import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import './style.scss'


function Login (){
    return<>
    <h1>Login</h1>

    <br/>
<div  className='centralizar'>
    <form>
  <label>
  <br/>
    Email:
    <br/>
    <input className="input-texto" id="email" type="email" required/>
           
    <br/>
    Senha:
    <br/>
    <input className="input-texto" id="senha" type="password" required/>
  </label>
  <br/>
  <div className='espacamento'>
  <Button>Entrar</Button>
  
  <Link to='/'><Button>Voltar</Button></Link>
  <br/>

  </div>
  <Link to='/cadastro'>Não tem conta? Faça o registro</Link>
</form>


</div>

    </>
}

export default Login