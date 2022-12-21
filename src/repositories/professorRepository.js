
const Professor = require('../model/professor')


const getProfessores = async()=>{

    return await Professor.findAll();
    
}

const getProfessoresId = async(id)=>{
    return await Professor.findByPk(id,
        {attributes:[
            'primeiroNome',
            'ultimoNome',
            'telefone',
            'email'
        ]})

}

const getProfessoresEmail = async(email) =>{
    return await Professor.findOne({
        where:{
            email:email
        },
        attributes:[
            'primeiroNome',
            'ultimoNome',
            'telefone',
            'email'
        ]
    })
}

const postProfessores = async(professor)=>{

    return await Professor.create(professor)
}



module.exports = {
getProfessores,
getProfessoresId,
getProfessoresEmail,
postProfessores
}