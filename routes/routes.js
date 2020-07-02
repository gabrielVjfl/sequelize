const express = require('express')


const userController = require('./controllers/userController')

const enderecoController = require('./controllers/enderecoController')


const Users = require('../sql/models/User')

const Endereco = require('../sql/models/Endereco')

const router = express()

router.post('/registrar', userController.stores)

router.get('/pegar', userController.pegar)

router.get('/page', userController.page)

router.get('/voltar', userController.voltar)

router.get('/listar', userController.index)

router.get('/ordenar/:id', userController.order)


router.post('/users/:user_id/endereco', enderecoController.store)



// POST LOCALHOST:3333/users/3/address

module.exports = router
