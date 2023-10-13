const {DataTypes} = require('sequelize');

import db from '../db';

//Define o modelo 'user' com os campos 'nome' e 'email'
const user = db.define('user', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false //Não permite valores nulos
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false //Não permite valores nulos
    }
}); //Nome da tabela e atributos

module.exports = user;