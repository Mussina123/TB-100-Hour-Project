require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
app.use(cors())


const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.sendFile(__dirname, 'index.html')
})

app.listen(PORT, () => {
    console.log(`Connected to Port ${PORT}`)
})