const Sequelize = require('sequelize')

let db = require('./bd')

const User = require('../models/User')

const connection = new Sequelize(db)

User.init(connection)

module.exports = connection