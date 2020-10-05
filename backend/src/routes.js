// Esse arquivo tem como responsabilidade cadastrar as rotas da aplicação

const express = require("express");

// const multer = require("multer");

// const Multer = multer({
//     storage: multer.memoryStorage(),
//     limits: 1024 * 1024,

// })

// Criando o roteirizador
const routes = express.Router();

// const autorizacaoMid = require("./middlewares/autorizacao");
// const uploadImage = require("./services/firebase");

const clienteController = require("./controller/cliente");
const sexoClienteController = require("./controller/sexo_cliente");
const servicoController = require("./controller/servico");

// Rotas públicas

// Rotas de sessão
// routes.post("/sessao", sessaoController.store);

// Rota de cadastro de sexo_cliente
routes.post("/sexo_cliente", sexoClienteController.store);

// Rota de cadastro de cliente
routes.post("/cliente", clienteController.store);

// Rota de cadastro de serviço
routes.post("/servico", servicoController.store);

// Middleware de proteção das rotas
// routes.use(autorizacaoMid);

// Rotas privadas

// Rotas de cliente
routes.get("/clientes", clienteController.list);
routes.get("/cliente/:id", clienteController.searchById);
// routes.post("/cliente/update/:id", clienteController.update);

// Rotas de sexo_cliente
routes.get("/sexos_clientes", sexoClienteController.list);
routes.get("/sexo_cliente/:id", sexoClienteController.searchById);
routes.post("/sexo_cliente/update/:id", sexoClienteController.update);
routes.post("/sexo_cliente/delete/:id", sexoClienteController.delete);

// Rotas de servico
routes.get("/servicos", servicoController.list);
routes.get("/servico/:id", servicoController.searchById);
// routes.post("/servico/update/:id", servicoController.update);

module.exports = routes;