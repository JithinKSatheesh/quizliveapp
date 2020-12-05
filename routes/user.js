const express = require('express')
const router = express.Router()


router.get('/allusers',(req,res)=>{
    res.status(200).json({
        users:g_users
    })
})

router.post('/login',(req,res)=>{
    const username = req.body.username
    console.log(`${username} loggined`)
    
    // inserting user into global array
    // Todo: add a validation for unique users
    if(g_users.findIndex(user => user.username == username) === -1 ){
        g_users.push({
            username,
            score: 0
        })
        
    }
    return res.status(200).json({
        user:username
    })
})


module.exports = router