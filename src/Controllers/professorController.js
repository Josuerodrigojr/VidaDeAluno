const database = require('../../db')
const professorService = require('../Service/professorService')

const getProfessores = async(req,res) => {
    const professores = await professorService.getProfessores()
    res.status(professores.statusCode).json(professores.data);
    

}



module.exports = {getProfessores};