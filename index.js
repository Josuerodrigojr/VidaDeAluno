
(async () => {
    const database = require('./db');
    const Professor = require ('./src/Model/professor')
    const Aluno = require ('./src/Model/aluno')
    const Escola = require ('./src/Model/escola')
    console.log(database, 'database')

 
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();