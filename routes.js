const express = require('express')

const router = express.Router()

router.get('/posts', (req,res)=>{
    // res.send('posts page')
    res.json(
        {msg:'GET all posts'}
    )
})

router.get('/posts/id', (req,res)=>{
    res.json(
        {msg:'GET a specific post'}
    )
})

module.exports= router