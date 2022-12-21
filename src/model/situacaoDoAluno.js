const { DataTypes } = require('sequelize')
const database = require('../../db')


const Situacao = database.define('situacao', {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  conteudo:{
    allowNull: false,
    type: DataTypes.STRING
  },
  data:{
    allowNull: false,
    type: DataTypes.DATE
  },
  notaIunidade:{
    allowNull: true,
    type: DataTypes.INTEGER
  },
  notaIIunidade:{
    allowNull: true,
    type: DataTypes.INTEGER
  },
  notaIIIunidade:{
    allowNull: true,
    type: DataTypes.INTEGER
  },
  notaIVunidade:{
    allowNull: true,
    type: DataTypes.INTEGER
  },
  avaliacao:{
    allowNull: false,
    type: DataTypes.STRING
  }
},{tableName: 'situacao'})
 
  module.exports = Situacao;