const mongoose=require('mongoose');
const dotenv=require('dotenv');
const express=require('express');
const app=express();
const User=require('./model/userSchema');
dotenv.config({path: './config.env'});
const PORT=process.env.PORT || 5000;
require('./db/conn');
app.use(express.json());
app.use(require('./router/auth'));

app.get('/',(req,res)=>{
  res.send('Hello world from server');
})
/*app.get('/about',(req,res)=>{
  res.send('Hello world from about me');
}) */
app.get('/contact',(req,res)=>{
  res.send('Hello world from contact');
})
app.get('/signin',(req,res)=>{
  res.send('Hello world from signin');
})
app.get('/signup',(req,res)=>{
  res.send('Hello world from signup');
})


if ( process.env.NODE_ENV == "production"){

  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {

      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  })


}

app.listen(PORT,()=>{
  console.log(`app is listening on port ${PORT}`);
})