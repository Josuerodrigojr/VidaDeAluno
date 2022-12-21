const express = require('express')
const controllerProfessor = require('./controllers/professorController')
const controllerAluno = require('./controllers/aluno')
const controllerEscola = require('./controllers/escolaController')

const router = express.Router()

//Rotas dos professores

//Rota para adicionar o professor

router.post('/professores', controllerProfessor.postProfessores)

//Rota para verificar a quantidade de alunos

router.get('/professores/aluno', controllerAluno.getAlunos)



//Rota dos alunos

//Rota das escolas

//Rota para verificar todos os professores

router.get('/escola/professores', controllerProfessor.getProfessores);

// Verificar abaixo depois

//Rotas para verificar as escolas registradas

router.get('/escola', controllerEscola.getEscolas)

//Rotas para a visualização da escola para os professores. Ainda estou vendo se vou deixar essas rotas.
router.get('/escola/professores/:email', controllerProfessor.getProfessoresEmail)

router.get('/escola/professores/:id', controllerProfessor.getProfessoresId)











module.exports = router