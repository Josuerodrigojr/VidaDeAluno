
(async () => {
    const database = require('../../db');
    const Professor = require ('../Model/professor')


 
    try {
        const resultadoCreate = await Professor.create({
            primeiroNome: 'Monitor2',
            ultimoNome: 'hsjdhsa',
            telefone: 'dsuydusiydsad',
            materia: 'Matematica',
            email: 'fsdfsdfsdfsdfsdf@gmail.com',
            escola: 'jksdksajhd',
            senha: 'dhjsahdjksad',
        })
        console.log(resultadoCreate)
    } catch (error) {
        console.log(error);
    }
})();