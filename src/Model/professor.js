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
      materia:{
        allowNull: false,
        type: DataTypes.STRING
      },
      email:{
        allowNull: false,
        unique: true,
         //Validate, vai verificar se o padrão que será digitado será um e-mail.
      validate: {
        isEmail: true
      },
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
}, {tableName: 'professores'})
 
module.exports = Professor;