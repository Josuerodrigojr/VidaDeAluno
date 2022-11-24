const Sequelize = require('sequelize');

const user = "postgres";
const host = "localhost";
const database = "vidaAluno_development";
const port = "5432";
const senha = '3301'

const sequelize = new Sequelize(database, user, senha, {dialect: 'postgres'});
 
module.exports = sequelize;