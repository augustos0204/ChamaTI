const express = require('express');
const cors = require("cors");
const rotas = require('./routes');
require('./models');

// Iniciando a aplicação
const app = express();

// Desbloqueando o CORS
app.use(cors());

// Nas requisições podem ter dados tipo Json
app.use(express.json());

// Cadastrando as rotas
app.use(rotas);

// Exportar a aplicação configurada
module.exports = app;