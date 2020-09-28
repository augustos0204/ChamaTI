const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Bairro = require("../models/Bairro");
const Cidade = require("../models/Cidade");
const Cliente = require("../models/Cliente");
const EnderecoCliente = require("../models/EnderecoCliente");
const EnderecoPrestadorServicos = require("../models/EnderecoPrestadorServicos");
const Estado = require("../models/Estado");
const ImagemServico = require("../models/ImagemServico");
const LocalizacaoCliente = require("../models/LocalizacaoCliente");
const LocalizacaoPrestadorServicos = require("../models/LocalizacaoPrestadorServicos");
const Mensagem = require("../models/Mensagem");
const PrestadorServicos = require("../models/PrestadorServicos");
const Servico = require("../models/Servico");
const SexoCliente = require("../models/SexoCliente");
const SexoPrestadorServicos = require("../models/SexoPrestadorServicos");
const TelefoneCliente = require("../models/TelefoneCliente");
const TelefonePrestadorServicos = require("../models/TelefonePrestadorServicos");

// Criamo a conexão com os dados da configuração
const conexao = new Sequelize(dbConfig);

// Inicializando as models
Bairro.init(conexao);
Cidade.init(conexao);
Cliente.init(conexao);
EnderecoCliente.init(conexao);
EnderecoPrestadorServicos.init(conexao);
Estado.init(conexao);
ImagemServico.init(conexao);
LocalizacaoCliente.init(conexao);
LocalizacaoPrestadorServicos.init(conexao);
Mensagem.init(conexao);
PrestadorServicos.init(conexao);
Servico.init(conexao);
SexoCliente.init(conexao);
SexoPrestadorServicos.init(conexao);
TelefoneCliente.init(conexao);
TelefonePrestadorServicos.init(conexao);

// Inicializando as associações
Bairro.associate( conexao.models );
Cidade.associate( conexao.models );
Cliente.associate( conexao.models );
EnderecoCliente.associate( conexao.models );
EnderecoPrestadorServicos.associate( conexao.models );
Estado.associate( conexao.models );
ImagemServico.associate( conexao.models );
LocalizacaoCliente.associate( conexao.models );
LocalizacaoPrestadorServicos.associate( conexao.models );
Mensagem.associate( conexao.models );
PrestadorServicos.associate( conexao.models );
Servico.associate( conexao.models );
SexoCliente.associate( conexao.models );
SexoPrestadorServicos.associate( conexao.models );
TelefoneCliente.associate( conexao.models );
TelefonePrestadorServicos.associate( conexao.models );

// Exportamos a conexão
module.exports = conexao;