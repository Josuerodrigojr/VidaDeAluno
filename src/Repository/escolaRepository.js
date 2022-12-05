

const Escola = require('../Model/escola')

const getEscolas = async() =>{
    
    return await Escola.findAll();

}

module.exports = {
    getEscolas
}