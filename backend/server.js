require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const diaryRoutes = require('./routes/diaryRoutes')
const app = express();
const cors = require('cors')
app.use(cors())


const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Getting routes from diaryRoutes.js // 
app.use('/api/diary', diaryRoutes)


// Connect to mongoDB and only listen when connected // 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Connected to DB and listening on Port ${PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})