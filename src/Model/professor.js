const Sequelize = require('sequelize');
const database = require('../../db');
 
const Professor = database.define('professores', {
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
      telefone:{
        allowNull: false,
        type: Sequelize.STRING
      },
      email:{
        allowNull: false,
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
})
 
module.exports = Professor;