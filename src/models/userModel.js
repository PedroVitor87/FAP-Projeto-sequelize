const {DataTypes} = require('sequelize');
const db = require('../data/db');

//Define o modelo 'user' com os campos 'nome' e 'email'
const user = db.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false //Não permite valores nulos
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}); //Nome da tabela e atributos

module.exports = user;
