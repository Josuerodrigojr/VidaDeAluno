const alunosService = require('../service/aluno')



const getAlunos = async(req,res)=>{
    const alunos = await alunosService.getAlunos();

    res.status(alunos.statusCode).json(alunos.data)
}

module.exports = {
    getAlunos
}