const Sequelize = require('sequelize')

let db = require('./bd')

const User = require('../models/User')


const Endereco = require('../models/Endereco')

const connection = new Sequelize(db)

User.init(connection)

Endereco.init(connection)

// Relacionamentos

Endereco.associate(connection.models) // ou connection.User

module.exports = connection