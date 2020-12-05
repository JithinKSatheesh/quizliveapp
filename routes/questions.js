const express = require('express')
const router = express.Router()
// const { check } = require('express-validator')


const Question = require('../models/questions')

router.get('/',(req,res)=>{
    res.status(200).json({
        "message":"working",
        "user":g_users
    })
})

router.post('/insert',(req,res)=>{
    const question = new Question(req.body)
    question.save((err,question)=>{
        if(err){
            return res.status(400).json({
                error:"error in inserting question"
            })
        }
        res.status(200).json({
            data:question
        })
    })
    
})

router.get('/listall',(req,res)=>{
    let limit = req.query.limit ? parseInt(req.query.limit) : 6
    Question.find()
        .limit(limit)
        .exec((err,questionlist)=>{
            if(err){
                return res.status(400).json({
                    error:"error in fetching questions"
                })
            }
            res.status(200).json({
                data:questionlist
            })

        })
})


module.exports = router;