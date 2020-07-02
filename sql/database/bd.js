// CONEXÃO COM O BANCO DE DADOS

module.exports = {
    dialect: 'mysql',
    host: 'localhost', // servidor
    username: 'root', // usuario
    password: '',    // senha
    database: 'sqlproject', //dbname

    define: {
        timestamps: true,
        underscored: true
    }
}