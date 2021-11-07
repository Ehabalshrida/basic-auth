'use strict';
const express = require('express');
const authrouter = express.Router();
const {middleSignUp,basicAuth}=require('../auth/auth.middleware');


authrouter.post('/signup',middleSignUp ,(req, res, next) => {
  

});

authrouter.post('/signin', basicAuth, (req, res, next)=> {

       
   });








module.exports={authrouter};