const PORT = 3334

const express = require('express')

const app = express()

const routes = require('./routes/routes')

const bodyParser = require('body-parser')

const database = require('./sql/database')



app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(bodyParser.json())

app.use('/api', routes)


app.listen(PORT, () => {
    console.log('Rodando na porta ', PORT)
})