'use strict';
const {Users}=require('../models/index');
const bcrypt = require('bcrypt');
const base64 = require('base-64');


const middleSignUp = async (req,res,next)=>{
try{ req.body.password = await bcrypt.hash(req.body.password, 5);
    const record = await Users.create(req.body);
   res.status(201).json(record);
   next();

 }catch(e){res.status(403).send('Error occurred')}

} 

const basicAuth  =async(req,res,next)=>{



    try{
        const encodedHeaders = req.headers.authorization.split(' ')[1];
        const [username, password] = base64.decode(encodedHeaders).split(':'); 
        console.log(username,password)
        const user = await Users.findOne({ where: { username:username } });
        //console.log(user);
        const valid = await bcrypt.compare(password, user.password);
        if (valid){
            res.status(200).json(user);
         next();}
         else{
            res.status(500).json({ 'error': 'username or password incorrect!' })
            next();
        
         }   

   }catch(e){
       res.status(403).send("An Error Occurred!");

   }
}


module.exports={middleSignUp,
    basicAuth}