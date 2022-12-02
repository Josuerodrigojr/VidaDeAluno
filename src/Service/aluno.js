const alunoRespositorio = require('../Repository/aluno')



const getAlunos = async()=>{
    try{
        const alunos = await alunoRespositorio.getAlunos();
        if(alunos){
            return{
                statusCode: 200,
                data: {
                    message:'Todos os alunos da sua disciplina',
                    alunos: alunos

                }
            }
        } else {
            return{
                statusCode: 404,
                data: {
                    message: 'Seus alunos não estão cadastrados'
                }
            }
        }
    }catch(erro){
        return{
            statusCode:500,
            data:{
                message: erro
            }
        }
    }
}

module.exports = {
    getAlunos
}