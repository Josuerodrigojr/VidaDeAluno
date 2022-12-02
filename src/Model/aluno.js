const Sequelize = require('sequelize');
const database = require('../../db');
 
const Aluno = database.define('alunos', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primeiroNome:{
        allowNull: false,
        type: Sequelize.STRING
      },
      ultimoNome:{
        allowNull: false,
        type: Sequelize.STRING
      },
      serie:{
        allowNull: false,
        type: Sequelize.STRING
      },
      telefone:{
        allowNull: false,
        type: Sequelize.STRING
      },
      email:{
        allowNull: false,
        unique: true,
         //Validate, vai verificar se o padrão que será digitado será um e-mail.
      validate: {
        isEmail: true
      },
        type: Sequelize.STRING
      },
      escola:{
        allowNull: false,
        type: Sequelize.STRING
      },
      senha:{
        allowNull: false,
        type: Sequelize.STRING
      }
}, {tableName: 'alunos'})
 
module.exports = Aluno;