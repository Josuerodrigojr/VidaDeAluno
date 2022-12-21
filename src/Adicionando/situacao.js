
(async () => {
  const database = require('../../db');
  const Situacao = require ('../Model/situacaoDoAluno')



  try {
      const resultadoCreate = await Situacao.create({
          conteudo: 'Triângulo de Pitágoras',
          data: Date.now(),
          notaIunidade: 10,
          notaIIunidade: 10,
          notaIIIunidade: 10,
          notaIVunidade: 10,
          avaliacao: 'Ótimo aluno',
      })
      console.log(resultadoCreate)
  } catch (error) {
      console.log(error);
  }
})();