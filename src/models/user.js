'use strict';

// Our table schema
const Users  = (sequelize, DataTypes) => sequelize.define('user', {

    username: {
        type: DataTypes.STRING,
    
    },
    password: {
        type: DataTypes.STRING,
      }
  });
  
  module.exports = Users ;