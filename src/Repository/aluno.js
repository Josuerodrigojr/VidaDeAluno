const Alunos = require('../Model/aluno')



const getAlunos = async()=>{
    return await Alunos.findAll();
}


module.exports={
    getAlunos
}