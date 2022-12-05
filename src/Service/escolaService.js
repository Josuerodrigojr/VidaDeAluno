const escolaRepositorio = require ('../Repository/escolaRepository.js')


const getEscolas = async() =>{
    try
    {
    const escola = await escolaRepositorio.getEscolas();
    
    if(escola.length > 0 ){
        return{
            statusCode: 200,
            data:{
                message: 'Todas as escolas registradas são',
                escola:escola
            }
        }
    } else{
        return{
            statusCode: 404,
            data:{
                message: 'Não tem escola registrada !!'
            }
        }
    }
 } 
 catch(erro){
    return{
        statusCode:500,
        data:{
            message: erro
        }
    }

 }
}


module.exports = {
    getEscolas
}