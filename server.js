const express = require('express');
const app = express();
const port =3000;

app.use('/', express.static('public'));

const budget=
[ {
    "title": "Eat out",
    "budget": 90
},
{
    "title": "Rent",
    "budget": 450
               },
{
    "title": "Grocery",
    "budget": 250
   
},
{
    "title": "Car-Shopping",
    "budget": 100
   
},
{
    "title": "HealthInsurance",
    "budget": 75
   
},
{
    "title": "Education",
    "budget": 150
   
},
{
    "title": "Miscelleneous",
    "budget": 350
   
}



]
app.get('/hello', (req, res)=>{
    res.send('Hello');
});

app.get('/budget',(req,res)=>{

res.json(budget);

})
app.listen(port,() =>{
console.log('example app');


});