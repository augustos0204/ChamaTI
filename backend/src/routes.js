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

const atendimentoServicoController = require("./controller/atendimento_servico");
const clienteController = require("./controller/cliente");
const prestadorServicosController = require("./controller/prestador_servicos");
const sexoClienteController = require("./controller/sexo_cliente");
const sexoPrestadorServicosController = require("./controller/sexo_prestador_servicos");
const servicoController = require("./controller/servico");
const sexo_prestador_servicos = require("./controller/sexo_prestador_servicos");

// Rotas públicas

// Rotas de sessão
// routes.post("/sessao", sessaoController.store);

// Rota de cadastro de atendimento de serviço
routes.post("/atendimento_servico", atendimentoServicoController.store);

// Rota de cadastro de cliente
routes.post("/cliente", clienteController.store);

// Rota de cadastro de prestador de serviços
routes.post("/prestador_servicos", prestadorServicosController.store);

// Rota de cadastro de serviço
routes.post("/servico", servicoController.store);

// Rota de cadastro de sexo_cliente
routes.post("/sexo_cliente", sexoClienteController.store);

// Rota de cadastro de sexo_prestador_servicos
routes.post("/sexo_prestador_servicos", sexoPrestadorServicosController.store);

// Middleware de proteção das rotas
// routes.use(autorizacaoMid);

// Rotas privadas

// Rotas de atendimento servico
routes.get("/atendimentos_servicos", atendimentoServicoController.list);
routes.get("/atendimento_servico/:id", atendimentoServicoController.searchById);

// Rotas de cliente
routes.get("/clientes", clienteController.list);
routes.get("/cliente/:id", clienteController.searchById);
// routes.post("/cliente/update/:id", clienteController.update);

// Rotas de prestador de serviços
routes.get("/prestadores_servicos", prestadorServicosController.list);
routes.get("/prestador_servicos/:id", prestadorServicosController.searchById);

// Rotas de servico
routes.get("/servicos", servicoController.list);
routes.get("/servico/:id", servicoController.searchById);
// routes.post("/servico/update/:id", servicoController.update);

// Rotas de sexo_cliente
routes.get("/sexos_clientes", sexoClienteController.list);
routes.get("/sexo_cliente/:id", sexoClienteController.searchById);
routes.post("/sexo_cliente/update/:id", sexoClienteController.update);
routes.post("/sexo_cliente/delete/:id", sexoClienteController.delete);

// Rotas de sexo_prestador_servicos
routes.get("/sexos_prestadores_servicos", sexo_prestador_servicos.list);
routes.get("/sexo_prestador_servicos/:id", sexo_prestador_servicos.searchById);
routes.post("/sexo_prestador_servicos/update/:id", sexo_prestador_servicos.update);
routes.post("/sexo_prestador_servicos/delete/:id", sexo_prestador_servicos.delete);

module.exports = routes;