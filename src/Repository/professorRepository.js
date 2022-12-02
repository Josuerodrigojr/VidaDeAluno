
const Professor = require('../Model/professor')


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

const postProfessores = async(primeiroNome, ultimoNome, telefone, email, escola, senha)=>{

    return await Professor.create({
            primeiroNome,
            ultimoNome,
            telefone,
            email,
            escola,
            senha,
    })
}

module.exports = {
getProfessores,
getProfessoresId,
getProfessoresEmail,
postProfessores
}