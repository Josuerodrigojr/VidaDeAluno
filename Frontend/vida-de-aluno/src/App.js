import Rodape from './pages/rodape'
import './App.scss';
import CabecalhoComLogin from './pages/cabecalhos/cabecalhoComLogin/index'
import axios from 'axios'



function App() {


  
  return (
   
    <div className="App">
    <CabecalhoComLogin/>
    <h1>Sobre o site:</h1>
    <div className='display'>
    <div>
    <p>A vida do aluno, tem como objetivo principal auxiliar o professor, o aluno, os responsáveis e a escola.
  O principal intuito do site é disponibilizar as cadernetas que somente a secretária e os professores têm acesso, dessa forma os pais e os alunos poderão a todo momento verificar no site os conteúdos que foram ministrados nas aulas, suas notas, comportamento do aluno e as observações do professor.
  </p>
  
  <p>
  O serviço é oferecido para as escolas de redes públicas e/ou particulares. Basta fazer o cadastro dos professores e dos alunos, o professor poderá postar as observações e a escola, os pais e os responsáveis poderão sempre se manterem informado.
  
  

  </p>
  </div>
  <div><img  src='./paginainicial.jpg'/></div>
  </div>
  <Rodape/>
    </div>
  );
}

export default App;
