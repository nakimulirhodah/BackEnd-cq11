const express = require('express')
const mongoose = require('mongoose')

const app = express();
const port = 8080

app.get('/', (reg, res) =>{
    console.log(res.send('xndd'))
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})

 
//CONNECT TO THE DATABASE
mongoose.connect(""
).then(
    ()=>{comsole.log('Connected to the DB')}

).catch(err=>{
    console.log('Error connecting to the DB',err)
})

// function student (req,res){
//console.log(req=+res)}
//}

//const students =(req, res)=>{console.log (req+res)}

//(req,res)=>{console.log(req+res)}


    
