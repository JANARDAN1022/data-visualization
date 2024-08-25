const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const ErrorHandler = require('./middlewares/ErrorHandler');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(cors({
    origin:['http://localhost:5173'], 
    credentials: true,
    exposedHeaders: 'Access-Control-Allow-Private-Network',
  }));
app.use(express.json());
app.use(ErrorHandler);



app.get('/',(req,res)=>{
    res.json('Wroking, Hello  From Data Visualization');
    });
  
module.exports = app;