const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');

routes.get("/usuarios/", userController.getUser); //Listar usuários

routes.get("/usuarios/cadastrar", userController.displayForm); //Formulário para cadastro
routes.post("/usuarios/cadastrar", userController.createUser); //Cadastrar usuário

routes.get("/usuarios/atualizar/:id", userController.displayUpdateForm); //Formulário para atualização do usuário
routes.post("/usuarios/atualizar/:id", userController.updateUser); //Atualiza informações do usuário

routes.post("/usuarios/deletar/:id", userController.deleteUser); //Excluir usuário
routes.delete("/usuarios/deletar/:id", userController.deleteUserByDeleteMethod); //Excluir usuário


module.exports = routes;
