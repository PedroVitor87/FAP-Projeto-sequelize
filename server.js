//Server
const express = require('express');
const app = express();

const bodyParser = require('body-parser'); //Middleware para analisar corpos de solicitação
const database = require('./db');
const route = require('./routes');

const PORT = 3001;

app.use(bodyParser.urlencoded({extended:true})); //Usa o middleware bodyParser para analisar corpos de solicitação
app.use(express.json());
app.use(route); //Usa as rotas definidas no arquivo 'routes'

database.sync()
    .then(() => {
        console.log('Tabela sincronizada com sucesso');
        //Inicia o servidor apenas após a sincronização bem-sucedida
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Erro ao sincronizar tabela:', error);
    }); 
