
(async () => {
    const database = require('../../db');
    const Aluno = require ('../Model/aluno')


 
    try {
        const resultadoCreate = await Aluno.create({
            primeiroNome: 'Monitor2',
            ultimoNome: 'hsjdhsa',
            serie: 'Sexto ano',
            telefone: 'dsuydusiydsad',
            email: 'fsdfsdfsdfsdfsdf@gmail.com',
            escola: 'jksdksajhd',
            senha: 'dhjsahdjksad',
        })
        console.log(resultadoCreate)
    } catch (error) {
        console.log(error);
    }
})();