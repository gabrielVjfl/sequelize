// CONEXÃO COM O BANCO DE DADOS

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'sqlproject',
    define: {
        timestamps: true,
        underscored: true
    }
}