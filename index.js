const express = require('express')
const app = express();
app.use(express.json());
const Port = 4500;


app.listen(Port,()=>{
    console.log(`Application running on ${Port}`)
})