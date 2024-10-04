const express = require('express')
const app = express();
app.use(express.json());
const connectToMongo = require('./config/db')
const Port = 4500;
connectToMongo()


app.use('/api/user',require('./routes/userRoutes'));

app.listen(Port,()=>{
    console.log(`Application running on ${Port}`)
})

