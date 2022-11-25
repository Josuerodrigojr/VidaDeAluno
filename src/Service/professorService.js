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

module.exports = {
    getProfessores
}