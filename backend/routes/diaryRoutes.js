const express = require('express')

const {
    getDiarys,
    getDiary,
    createDiary,
    updateDiary,
    deleteDiary,
} = require('../controllers/diaryController')

const router = express.Router()

router.get('/', getDiarys)

// router.get('/:id', getDiary)

// router.get('/', createDiary)

// router.get('/:id', updateDiary)

// router.get('/:id', deleteDiary)

module.exports = router 