const Sequelize = require('sequelize');
const database = require('../../db');
 
const Escola = database.define('escolas', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resumo:{
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
      endereco:{
        allowNull: false,
        type: Sequelize.STRING
      },
      senha:{
        allowNull: false,
        type: Sequelize.STRING
      }
})
 
module.exports = Escola;