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
// const postagemController = require("./controllers/postagem");
// const comentarioController = require("./controllers/comentario");
// const sessaoController = require("./controllers/sessao");

// Rotas públicas
// Rotas de sessão
// routes.post("/sessao", sessaoController.store);

// Rota de cadastro de aluno
routes.post("/cliente", clienteController.store);

// Middleware de proteção das rotas
// routes.use(autorizacaoMid);

// Rotas privadas
// Rotas de aluno
routes.get("/clientes", clienteController.list);
routes.get("/cliente/:id", clienteController.searchById);

// Rotas de postagem
// routes.get("/postagens", postagemController.index);
// routes.post("/postagens", Multer.single("imagem"), uploadImage, postagemController.store);
// routes.delete("/postagens/:id", postagemController.delete);

// Rotas de comentário
// routes.get("/postagens/:postId/comentarios", comentarioController.index);
// routes.post("/postagens/:postId/comentarios", comentarioController.store);

module.exports = routes;