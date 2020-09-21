# Caderno de anotações

## Preparando o ambiente de trabalho
Foram utilizados diferentes recursos para o desenvolvimento desta aplicação, como:
A ferramenta VISUAL STUDIO CODE, para escrever códigos e auxiliar em vários momentos como interface para instalações e melhor visualização de trechos específicos.<br>
- Pode ser instalada a partir de um executável encontrada na página <https://code.visualstudio.com/>

A ferramenta POSTMAN, para o teste de requisições HTTP.<br>
- Pode ser instalada a partir de um executável encontrada na página <https://www.postman.com/downloads/>

O banco de dados MYSQL, para armazenar informações da aplicação.<br>
- Pode ser instalado a partir da página <https://www.mysql.com/downloads/>

A ferramenta MYSQL WORKBENCH, para manipular o MYSQL com maior facilidade.<br>
- Pode ser instalado a partir de um executável encontrada na página <https://www.mysql.com/downloads/>

A tecnologia NODE, para poder fazer diversas funções do backend.<br>
- Pode ser instalada a partir de um executável encontrada na página <https://nodejs.org/en/>

A biblioteca NODEMON, para agilizar o processo de subir a aplicação.<br>
- Pode ser instalado a partir do comando:<br>
> 
```
npm install nodemon -D
```

O ORM SEQUELIZE
- Pode ser instalado a partir do comando:<br>
> 
```
npm install sequelize
```

O framework EXPRESS
- Pode ser instalado a partir do comando:<br>
>
```
npm install express
```

O framework para utilização do MYSQL
- Pode ser instalado a partir do comando:<br>
>
```
npm install mysql2
```

O cliente do ORM SEQUELIZE, para interação com o banco de dados MYSQL.<br>
- Pode ser instalado a partir do comando:<br>
>
```
npm install sequelize-cli -D
```

## Iniciando o projeto
Primeiro é necessário criar um "esqueleto" para que o projeto possa ao menos executar, e para tal criamos o "app" por meio do EXPRESS.
Nós implementamos da seguinte maneira:
>
```javascript
const express = require('express');

// Iniciando a aplicação
const app = express();

// Exportar a aplicação configurada
module.exports = app;
```

Porém até então ele não faz nada além de começar a executar, então criamos um "server" para poder subir a aplicação.
```javascript
const app = require('./app.js');

const porta = 3333;

// Sobe a aplicação em um servidor(conteiner)
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}.`);
});
```
E com isso a aplicação já está subindo.

## Criando o banco de dados

Por meio do SEQUELIZE é possível criar o banco de dados e também manipular.

Primeiro é necessário conectar ao database, para poder prosseguir foi consultada a documentação oficial do SEQUELIZE em <https://sequelize.org/master/manual/getting-started.html>.

Para conectar ao database foi usado o seguinte trecho de código como base:
> 
```javascript
const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
```

Optamos pela última opção, e o trecho de código ficou assim:
> 
```javascript
const { Sequelize } = require('sequelize');

const dialeto = 'mysql';
const host = 'localhost';
const database = 'chama_ti';
const username = 'root';
const password = 'bcd127';

// Passando parâmetros separadamente
const sequelize = new Sequelize( database, username, password, {
  host: host,
  dialect: dialeto,
  logging: console.log,
  define: {
    timestamp: true,
    underscored: true
  }
});

try {
    sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso.')
} catch (error) {
    console.log('Incapaz de conectar, erro ', error )
}

export default sequelize;
```
Logo já podemos criar o banco de dados, conforme as configurações, com o comando:
>
```
npx sequelize db:create
```

### Migrations
Primeiro criamos um projeto vazio com o comando:
>
```
    npx sequelize-cli init
```
Obs: Este comando deve ser executado dentro do diretório onde estas pastas vão ficar (ex: src)

Este comando cria as sequintes pastas:
- config, contêm um arquivo config que fala para o CLI como conectar com o banco de dados
- models, contêm todos os modelos do projeto (que serão criados posteriormente)
- migrations, contêm todos os arquivos de migrations
- seeders, contêm todos os arquivos seed

### Configuração
Antes prossseguir é necessário informar ao CLI como conectar ao banco de dados. Para tal editamos o arquivo config/config.json.
Lá substituímos os valores com as informações do nosso banco de dados. Ficou assim:
> 
```json
{
  "development": {
    "username": "root",
    "password": "bcd127",
    "database": "chama_ti",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "bcd127",
    "database": "chama_ti",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "bcd127",
    "database": "chama_ti",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### Criando modelo (e migrations)
Para criar um novo modelo por meio de migrations é necessário executar o seguinte comando:
>
```
npx sequelize migration:create --name nomeAqui
```

Logo depois o editamos a fim de modelar, efetivamente, a tabela, como neste exemplo:
>
```
'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tbl_prestador_servicos", {
      id_prestador_servicos: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome:  {
        type: Sequelize.STRING,
        allowNull: false
      },
      email:  {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      senha:  {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: true
      },
      id_sexo_prestador_servicos : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tbl_sexo_prestador_servicos",
          key: "id_sexo_prestador_servicos"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tbl_prestador_servicos");
  }
};
```

E para, efetivamente, criar o banco de dados executamos o comando:
>
```
npx sequelize db:migrate
```

### Criando as controllers das tabelas para manipulação pelo backend
Antes de criarmos uma controller precisamos criar sua respectiva model.
Criamos uma model e uma controller para cada tabela do BD, como no exemplo:

Model:
>
```

```