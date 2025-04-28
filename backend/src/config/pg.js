// src/config/pg.js
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost', // your host
  username: 'postgres', // your DB username
  password: 'Divy@ngSDE1', // your DB password
  database: 'maritimelms',
  logging: false,
});

module.exports = sequelize;
