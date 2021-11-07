'use strict';
require('dotenv').config();

const express = require('express');
const errorHandler=require('./error-handlers/500');
const notFoundHandler=require('./error-handlers/404');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT=process.env.PORT;
const {authrouter} = require('./routes/auth');
app.get('/',(req,res)=>{
    res.send('Hello to backend')
})





app.use(authrouter);
app.use('*', notFoundHandler);
app.use(errorHandler);
function start() {
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  }
  
  module.exports = {
    app,
    start
  };