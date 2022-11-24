
(async () => {
    const database = require('./db');
    const Professor = require ('./Model/professor')
    const Aluno = require ('./Model/aluno')
    const Escola = require ('./Model/escola')

 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();