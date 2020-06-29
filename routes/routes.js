const express = require('express')


const userController = require('./controllers/userController')

const Users = require('../sql/models/User')

const router = express()



router.post('/registrar', userController.store)

router.get('/pegar', userController.pegar)




module.exports = router
