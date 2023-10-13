const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Primeira rota');
});

routes.get('/teste', (req, res) => {
    res.send('Testando rota');
});

module.exports = routes;
