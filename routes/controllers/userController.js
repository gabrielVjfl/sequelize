// CONTROLLERS

const User = require("../../sql/models/User")

module.exports = {

    async store(req, res) {


        try {

        const {name, email} = req.body

        const user = await User.create({name, email})

        return res.json(user)
        }

        catch {
            res.send("ocorreu um erro")
        }

    },

   async pegar(req,res) {
       res.send("OLAAA MUNDIOO")
   }

}


