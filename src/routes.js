const express = require('express')
const controllerProfessor = require('./Controllers/professorController')
const controllerAluno = require('./Controllers/aluno')
const controllerEscola = require('./Controllers/escolaController')

const router = express.Router()

//Rotas dos professores

//Rota para adicionar o professor

router.post('/professores', controllerProfessor.postProfessores)

//Rota para verificar a quantidade de alunos

router.get('/professor/aluno', controllerAluno.getAlunos)

//Rota dos alunos

//Rota das escolas

//Rota para verificar todos os professores

router.get('/escola/professores', controllerProfessor.getProfessores);

// Verificar abaixo depois

//Rotas para verificar as escolas registradas

router.get('/escola', controllerEscola.getEscolas)

//Rotas para a visualização da escola para os professores.
router.get('/escola/professores/:email', controllerProfessor.getProfessoresEmail)

router.get('/escola/professores/:id', controllerProfessor.getProfessoresId)











module.exports = router