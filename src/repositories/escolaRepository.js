

const Escola = require('../model/escola')

const getEscolas = async() =>{
    
    return await Escola.findAll();

}

const getEscolaNome = async (escola) =>{
    return await Escola.findOne({
        where:{
            escola:escola
        }
    })
} 

module.exports = {
    getEscolas, getEscolaNome
}