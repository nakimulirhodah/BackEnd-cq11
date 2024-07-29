const express = require('express')

const router = express.Router()

Router.get('/posts', (req,res)=>{
    res.send('posts page')
})