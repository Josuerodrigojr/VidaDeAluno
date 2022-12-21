
(async () => {
  const database = require('../../db');
  const Escola = require ('../model/escola')



  try {
      const resultadoCreate = await Escola.create({
          resumo: 'sdsadsadsadsad',
          email: 'hsjdhsa@gmail.com',
          escola: 'jksdksajhd',
          senha: 'dhjsahdjksad',
      })
      console.log(resultadoCreate)
  } catch (error) {
      console.log(error);
  }
})();