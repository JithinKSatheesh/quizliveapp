const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// imports
const questionsRoute = require('./routes/questions')
const quizRoute = require('./routes/quiz')
const userRoute = require('./routes/user')

// config
require('dotenv').config()

// connections


// database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>{
    console.log('database connected')
}).catch(err=>console.log('error in connecting database'))

// setup
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


// global variable
g_users = []
g_question_timing = 2000 //Interval between each questions
g_question_count = 5
g_trigger_delay = 5000



// initializing routes
app.use("/api/questions",questionsRoute)
app.use("/api/quiz",quizRoute)
app.use("/api/user",userRoute)


//deploy
const port = process.env.PORT||8000
app.listen(port,()=>{
    console.log( `server running at ${port}`)
})  