const Professor = require('../Model/professor')


const getProfessores = async(req,res)=>{
    return await Professor.findAll();

}

module.exports = {
getProfessores
}