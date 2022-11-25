const { DataTypes } = require('sequelize');
const database = require('../../db');


 
const Professor = database.define('professores', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      primeiroNome:{
        allowNull: false,
        type: DataTypes.STRING
      },
      ultimoNome:{
        allowNull: false,
        type: DataTypes.STRING
      },
      telefone:{
        allowNull: false,
        type: DataTypes.STRING
      },
      email:{
        allowNull: false,
        type: DataTypes.STRING
      },
      escola:{
        allowNull: false,
        type: DataTypes.STRING
      },
      senha:{
        allowNull: false,
        type: DataTypes.STRING
      }
})
 
module.exports = Professor;