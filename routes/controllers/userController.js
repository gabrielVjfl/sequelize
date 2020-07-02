// CONTROLLERS

// 1 USUARIO PODEM TER N ENDEREÇOS


const User = require("../../sql/models/User")
//const {findAll, findOne} = require("../../sql/models/User")

module.exports = {

    async stores(req, res) {

        try {

        const {name, email} = req.body

        const user = await User.create(req.body)

        return res.json(user)
        }

        catch {
            res.send("ocorreu um erro")
        }

    },

   async pegar(req,res) {
       res.send("OLAAA MUNDIOO")
   },

   async page(req,res) {
    res.sendFile(__dirname + "/index2.html")
   },

    async voltar(req,res) {
        res.sendFile(__dirname + "/index3.html")
    },

    // LISTAR 
    async index(req,res) {

        try {

        const listar = await User.findAll()


        res.send({listar})


        }
        catch {
            res.send("DEU ERRO")
        }
    },


    // ORDENAR POR ID
    async order(req,res) {

        try {

            let ordenar = await User.findAll({where: {id: req.params.id}})

            res.send(ordenar)

        }
        catch {
            res.send('ERRO')
        }
    }

    // LISTAR PRIMEIROS. ID DESC



}


