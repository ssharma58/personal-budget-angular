const express = require('express');
const app = express();
const port =3000;

app.use('/', express.static('public'));
var budget = require('./server.json');
app.get('/hello', (req, res)=>{
    res.send('Hello');
});

app.get('/budget',(req,res)=>{
res.json(budget);
});

//const jsondata = require("./Users/cci-loaner/personal-budget/server.json");

app.listen(port,() =>{
 console.log('example app');
//console.log(jsondata);
});