const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Cliente = require("../models/Cliente");
const EnderecoCliente = require("../models/EnderecoCliente");
const EnderecoPrestadorServicos = require("../models/EnderecoPrestadorServicos");
const ImagemServico = require("../models/ImagemServico");
const LocalizacaoCliente = require("../models/LocalizacaoCliente");
const LocalizacaoPrestadorServicos = require("../models/LocalizacaoPrestadorServicos");
const Mensagem = require("../models/Mensagem");
const PrestadorServicos = require("../models/PrestadorServicos");
const Servico = require("../models/Servico");
const SexoCliente = require("../models/SexoCliente");
const SexoPrestadorServicos = require("../models/SexoPrestadorServicos");

// Criamo a conexão com os dados da configuração
// const conexao = new Sequelize(dbConfig);
const conexao = new Sequelize(dbConfig.url, dbConfig.config); 

// Inicializando as models
Cliente.init(conexao);
EnderecoCliente.init(conexao);
EnderecoPrestadorServicos.init(conexao);
ImagemServico.init(conexao);
LocalizacaoCliente.init(conexao);
LocalizacaoPrestadorServicos.init(conexao);
Mensagem.init(conexao);
PrestadorServicos.init(conexao);
Servico.init(conexao);
SexoCliente.init(conexao);
SexoPrestadorServicos.init(conexao);

// Inicializando as associações
Cliente.associate( conexao.models );
EnderecoCliente.associate( conexao.models );
EnderecoPrestadorServicos.associate( conexao.models );
ImagemServico.associate( conexao.models );
LocalizacaoCliente.associate( conexao.models );
LocalizacaoPrestadorServicos.associate( conexao.models );
Mensagem.associate( conexao.models );
PrestadorServicos.associate( conexao.models );
Servico.associate( conexao.models );
SexoCliente.associate( conexao.models );
SexoPrestadorServicos.associate( conexao.models );

// Exportamos a conexão
module.exports = conexao;