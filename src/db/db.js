const {Sequelize} = require('sequelize'); //ORM Sequelize que utiliza o banco de dados estilo uma query

//Configuração e conexão com o banco de dados
const sequelize = new Sequelize('projetosequelize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql' //Qual banco de dados utilizar
}) //Nome do DB, usuario, senha

try {
    sequelize.authenticate(); //Tentativa de autenticação no Banco de dados
    console.log("Banco de dados conectado com sucesso");
} catch(error){
    console.log("Erro", error);
}

module.exports = sequelize
