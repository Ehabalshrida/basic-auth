'use strict';
require('dotenv').config();

const server = require('./src/server');
const { db } = require('./src/models/index');
// we first connect to the DB, then we run our server
db.sync().then(() => {
  // kickstart the server
server.start();// will start our server
}).catch(console.error);