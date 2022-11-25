const express = require('express')
const controllerProfessor = require('./Controllers/professorController')


const router = express.Router()

router.get('/professores', controllerProfessor.getProfessores);


module.exports = router