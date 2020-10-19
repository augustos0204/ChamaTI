const app = require('./app.js');

const porta = 3333;

// Sobe a aplicação em um servidor(conteiner)
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}.`);
});