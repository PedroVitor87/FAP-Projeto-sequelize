const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');

routes.get("/usuarios/", userController.getUser); 

routes.get("/usuarios/cadastrar", userController.displayForm); 
routes.post("/usuarios/cadastrar", userController.createUser); 

routes.get("/usuarios/atualizar/:id", userController.displayUpdateForm); 
routes.post("/usuarios/atualizar/:id", userController.updateUser); 

routes.post("/usuarios/deletar/:id", userController.deleteUser); 

module.exports = routes;
