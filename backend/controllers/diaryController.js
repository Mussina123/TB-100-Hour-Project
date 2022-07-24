const express = require('express')
const FoodDiary = require('../models/diaryModel')
const mongoose = require('mongoose')

const getDiarys = async(req, res) => {
    const diary = await (FoodDiary.find({}).sort({createdAt: -1}))
    res.status(200).json(diary)
}

module.exports = {
    getDiarys
}


