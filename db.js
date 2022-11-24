const Sequelize = require('sequelize');
require('dotenv').config();

const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const port = process.env.DB_PORT;
const senha = process.env.DB_SENHA


const sequelize = new Sequelize(database, user, senha, {dialect: 'postgres'});
 


 
module.exports = sequelize;