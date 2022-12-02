
const Professor = require('../Model/professor')
const professorRepository = require('../Repository/professorRepository')



const getProfessores = async()=>{
    try {
        const professor = await professorRepository.getProfessores();

        if (professor.length > 0) {
            return {
                statusCode: 200,
                data: {
                    message: 'Professores retornados com sucesso',
                    professor: professor
                }
            }
        }
        else {
            return {
                statusCode: 404,
                data: {
                    message: 'Nenhum professor encontrado'
                }
            }
        }
    }
    catch (erro) {
        return {
            statusCode: 500,
            data: {
                message: 'Erro ao retornar professores',
                error: erro
            }
        }
    }
}

const getProfessoresId = async(id)=>{
  
    try{
        const professores = await professorRepository.getProfessoresId(id);

        if(professores){
            return{
                statusCode: 200,
                data:{
                    message: 'O id do professor está cadastrado',
                    professores: professores
                }
            }
        } else {
            return{
                statusCode: 400,
                data:{
                    message: 'O id do professor não está cadastrado'
                }
            }
        }

    }catch(erro){
        return{
            statusCode: 500,
            data:{
                message: erro
            }
        }

    }
}

const getProfessoresEmail = async(email)=>{
    
    try{
        const professores = await professorRepository.getProfessoresEmail(email)
        if(professores){
            return{
                statusCode: 200,
                data:{
                    message: 'O email do professor está cadastrado',
                    professores: professores
                }
            }
        } else {
            return{
                statusCode: 402,
                data:{
                    message: 'O email do professor não existe'
                }
            }
        } 
    } catch(erro){
        return{
            statusCode: 500,
            data:{
                message: erro
            }
        }

    }
}

const postProfessores = async(primeiroNome, ultimoNome, telefone, email, escola, senha)=>{
    try{
        const verificacaoEmail = await professorRepository.getProfessoresEmail(email)

        if(verificacaoEmail){
            return{
                statusCode: 400,
                data:{
                    message: 'O email já está cadastrado no nosso sistema',
                    
                }
            }

        }
        
        
        if(!primeiroNome & !ultimoNome & !telefone & !email & !escola & !senha){
            
            
          return{
                    statusCode: 400,
                    data:{
                        message: 'O professor não pode ser cadastrado, pois não tem todos os dados preenchidos!',
                        
                    }
                }
            } else {

                

                
                
                const professores = await professorRepository.postProfessores(primeiroNome, ultimoNome, telefone, email, escola, senha)
                return{
                    
                    statusCode: 200,
                    data:{
                        message: 'Cadastro realizado com sucesso!',
                        professores:professores

                    }
                }
            
        
}
    } catch(erro){
        return {
            statusCode: 500,
                    data:{
                        message: erro,
                        
                    }
        }

    }
}

module.exports = {
    getProfessores,
    getProfessoresId,
    getProfessoresEmail,
    postProfessores
}