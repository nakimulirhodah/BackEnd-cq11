const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express();
const port = 8080
const route = require('./routes')

app.get('/', (reg, res) =>{
    console.log(res.send('xndd'))
})

//MIDDLEWARE
app.use('/api',route)

//app.use(express.json())


app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.port}`)
})

 
//CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGODBLINK
).then(
    ()=>{console.log('Connected to the DB')}

).catch(err=>{
    console.log('Error connecting to the DB',err)
})

// function student (req,res){
//console.log(req=+res)}
//}

//const students =(req, res)=>{console.log (req+res)}

//(req,res)=>{console.log(req+res)}


    
