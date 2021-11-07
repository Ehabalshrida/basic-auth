'use strict';
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const Users=require('./user');
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};
  let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
  let user= Users(sequelize,DataTypes);
module.exports={
db:sequelize,
Users:user
}