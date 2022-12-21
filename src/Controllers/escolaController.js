const escolaService = require ('../service/escolaService')


const getEscolas = async (req,res) =>{
    const escolas = await escolaService.getEscolas();
    res.status(escolas.statusCode).json(escolas.data)
}

module.exports={
    getEscolas
}