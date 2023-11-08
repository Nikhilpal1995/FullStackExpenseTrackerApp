//util/database.js

const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense', 'root', 'Nik@1995', {
  dialect: 'mysql',
  host: 'localhost',
  logging: console.log,
});

module.exports = sequelize;