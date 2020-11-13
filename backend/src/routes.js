// Esse arquivo tem como responsabilidade cadastrar as rotas da aplicação

const express = require("express");

// const multer = require("multer");

// const Multer = multer({
//     storage: multer.memoryStorage(),
//     limits: 1024 * 1024,

// })

// Criando o roteirizador
const routes = express.Router();

const autorizacaoMid = require("./middlewares/autorizacao");
// const uploadImage = require("./services/firebase");

const atendimentoServicoController = require("./controller/atendimento_servico");
const clienteController = require("./controller/cliente");
const prestadorServicosController = require("./controller/prestador_servicos");
const sessaoController = require("./controller/sessao");
const sexoClienteController = require("./controller/sexo_cliente");
const sexoPrestadorServicosController = require("./controller/sexo_prestador_servicos");
const servicoController = require("./controller/servico");

// Rotas públicas

// Rota de cadastro de cliente
routes.post("/cliente", clienteController.store);

// Rota de cadastro de prestador de serviços
routes.post("/prestador_servicos", prestadorServicosController.store);

// Rota de cadastro de sexo_cliente
routes.post("/sexo_cliente", sexoClienteController.store);

// Rotas de sexo_cliente
routes.get("/sexos_clientes", sexoClienteController.list);
routes.get("/sexo_cliente/:id", sexoClienteController.searchById);
routes.post("/sexo_cliente/update/:id", sexoClienteController.update);
routes.post("/sexo_cliente/delete/:id", sexoClienteController.delete);

// Rota de cadastro de sexo_prestador_servicos
routes.post("/sexo_prestador_servicos", sexoPrestadorServicosController.store);

// Rotas de sexo_prestador_servicos
routes.get("/sexos_prestadores_servicos", sexoPrestadorServicosController.list);
routes.get("/sexo_prestador_servicos/:id", sexoPrestadorServicosController.searchById);
routes.post("/sexo_prestador_servicos/update/:id", sexoPrestadorServicosController.update);
routes.post("/sexo_prestador_servicos/delete/:id", sexoPrestadorServicosController.delete);

// Rotas de autenticação sessão
routes.post("/sessao/cliente", sessaoController.clienteAuthenticate);
routes.post("/sessao/prestador_servicos", sessaoController.prestadorServicoAuthenticate);

// Middleware de proteção das rotas
routes.use(autorizacaoMid);

// Rotas privadas

// Rotas de atendimento servico
// Rota de cadastro de atendimento de serviço
routes.post("/prestador_servicos/atendimento_servico", atendimentoServicoController.store);
routes.get("/atendimentos_servicos", atendimentoServicoController.list);
routes.get("/atendimento_servico/:id", atendimentoServicoController.searchById);

// Rotas de cliente
routes.get("/clientes", clienteController.list);
routes.get("/cliente/:id", clienteController.searchById);
routes.post("/cliente/servicos/finalizar_atendimento", atendimentoServicoController.finalizarAtendimentoCliente);
routes.post("/cliente/servicos/cancelar_atendimento", atendimentoServicoController.cancelarAtendimentoCliente);
// routes.post("/cliente/update/:id", clienteController.update);

// Rotas de prestador de serviços
routes.get("/servicos", servicoController.list);
routes.get("/prestador_servicos/servicos", servicoController.listByAtendimento);
routes.get("/prestador_servicos/servicos/em_atendimento", atendimentoServicoController.searchEmAtendimento);
routes.post("/prestador_servicos/servicos/finalizar_atendimento", atendimentoServicoController.finalizarAtendimentoPrestadorServico);
routes.post("/prestador_servicos/servicos/cancelar_atendimento", atendimentoServicoController.cancelarAtendimentoPrestadorServicos);
routes.get("/prestadores_servicos", prestadorServicosController.list);
routes.get("/prestador_servicos/:id", prestadorServicosController.searchById);

// Rotas de servico
// Rota de cadastro de serviço
routes.post("/cliente/servico", servicoController.store);
routes.get("/cliente/servicos", servicoController.listByClient);
routes.get("/servico/:id", servicoController.searchById);
// routes.post("/servico/update/:id", servicoController.update);

module.exports = routes;