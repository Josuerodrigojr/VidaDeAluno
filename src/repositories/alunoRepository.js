const Alunos = require('../model/aluno')


//Para verificar a quantidade total de alunos
const getAlunos = async()=>{
    return await Alunos.findAll();
}

//Para postar a situação do aluno

const postInformacoes = async()=>{
    
}




module.exports={
    getAlunos
}