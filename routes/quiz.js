const express = require('express')
const router = express.Router()

const Question = require('../models/questions')

const {triggerWinner,timedQuestions} = require('../utilities/timedfunctions')

router.get('/start',(req,res)=>{
    var index = 1
    Question.find({})
        .limit(g_question_count)
        .exec((err,questions)=>{
        if(err){
            return res.status(400).json({
                error:"failed to start quiz"
            })
        }
        questions.forEach(question=>{
            timedQuestions(question,index)
            index += 1
        })
        triggerWinner()

        res.status(200).json({
            "user":g_users,
            "message":"started successfully."
        })   
    })  
})

router.post('/addscore',(req,res)=>{
    const { username } = req.body
    const user_index = g_users.findIndex(user => user.username == username);
    g_users[user_index].score += 1;
    const score = g_users[user_index].score 
    res.status(200).json({
        score:score
    })
})

module.exports = router