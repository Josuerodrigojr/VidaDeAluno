const database = require('../../db')
const professorService = require('../Service/professorService')

const getProfessores = async(req,res) => {
    const professores = await professorService.getProfessores()
    res.status(professores.statusCode).json(professores.data);
    

}

const getProfessoresId = async (req,res) =>{
    const {id} = req.params

    const professores = await professorService.getProfessoresId(id)
    res.status(professores.statusCode).json(professores.data);
    
}

const getProfessoresEmail = async(req,res) =>{
    const {email}  = req.params


    const professores = await professorService.getProfessoresEmail(email)
    return res.status(professores.statusCode).json(professores.data)
}

const postProfessores = async(req,res)=>{
    const {primeiroNome, ultimoNome, telefone, email, escola, senha} = req.body;



    const professores = await professorService.postProfessores(primeiroNome, ultimoNome, telefone, email, escola, senha);
    return res.status(professores.statusCode).json(professores.data)

}



module.exports = {getProfessores, getProfessoresId, getProfessoresEmail, postProfessores};