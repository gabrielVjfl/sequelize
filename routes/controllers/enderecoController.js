const Endereco = require('../../sql/models/Endereco')

const User = require('../../sql/models/User')

module.exports = {

    async store(req,res) {



          const {user_id} = req.params //:id

          const {rua, numero, cep} = req.body

     
          const Users = await User.findByPk(user_id) // PROCURA PELO ID DO USUARIO

         if(!Users) {
          res.status(400).send("User not found")
         }
        
             let salvarEndereco = await Endereco.create({
                 rua,
                 numero,
                 cep,
                 user_id
             })

             return res.send(salvarEndereco)
      
    
    }
}