//Server
const express = require('express');
const route = require('./routes');
const bodyParser = require('body-parser');
const database = require('./db');
const app = express();

app.use(bodyParser.urlencoded({extended:true})); //Usa o middleware bodyParser para analisar corpos de solicitação
app.use(route); //Usa as rotas definidas no arquivo 'routes'

const PORT = 3001;
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
