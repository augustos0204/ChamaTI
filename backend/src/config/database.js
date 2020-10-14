const { Sequelize } = require('sequelize');

const dialeto = 'mysql';
const host = 'localhost';
const database = 'db_chama_ti';
const username = 'root';
const password = 'bcd127';

// timestamp - Coloca created_at e updated_at nas tabelas
// underscored - Coloca os nomes de tabelas e atributos em snake_case

module.exports = {
  dialect : dialeto,
  host : host,
  username : username,
  password : password,
  database : database,
  logging: console.log,
  define : {
      timestamp : true,
      underscored : true
  }
}

// // Passando parâmetros separadamente
// const sequelize = new Sequelize( database, username, password, {
//   host: host,
//   dialect: dialeto,
//   logging: console.log,
//   define: {
//     timestamp: true,
//     underscored: true
//   }
// });

// try {
//     sequelize.authenticate();
//     console.log('Conexão estabelecida com sucesso.')
// } catch (error) {
//     console.log('Incapaz de conectar, erro ', error )
// }

// export default sequelize;